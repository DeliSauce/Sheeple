import React from 'react';
import Rheostat from 'rheostat';
import { SingleDatePicker } from 'react-dates';
import merge from 'lodash/merge';

// import SingleDatePicker from '../../../node_modules/react-dates/src/components/SingleDatePicker';


class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.filters, {
    focused: false,
    date: null
  });
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
    this.updateSliderMinMax = this.updateSliderMinMax.bind(this);

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
  }
  onDateChange(date) {
    this.setState({ date });
    this.props.updateFilter('date', date.format("YYYY-MM-DD"));
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  handleClearFilter(){
    this.props.updateFilter('clear', 'clear');
    this.setState({date: null, minRate: 0, maxRate: 30});
  }

  filterChangeHandler(field) {
    return (e) => {
      switch (field) {
        // case 'date':
        //   this.props.updateFilter(field, e.target.value);
        //   break;
        // case 'location':
        //   this.props.updateFilter(field, e.target.value);
        //   break;
        case 'rates':
          this.props.updateFilter(field, [e.values[0], e.values[1]]);
          break;
        case 'skill-standing':
          this.props.updateFilter('skill', 'standing');
          break;
        case 'skill-sitting':
          this.props.updateFilter('skill', 'sitting');
          break;
        case 'skill-moving':
          this.props.updateFilter('skill', 'moving');
          break;

        case 'location-SF':
          this.props.updateFilter('location', 'SF');
          break;
        case 'location-NY':
          this.props.updateFilter('location', 'NY');
          break;

        case 'sortOrder-rate-low':
          this.props.updateFilter('sortOrder', 'rate-low');
          break;
        case 'sortOrder-rate-high':
          this.props.updateFilter('sortOrder', 'rate-high');
          break;

        // case 'skill':
        //   this.props.updateFilter(field, e.target.value);
        //   break;
        case 'autobook':
          console.log("autobook:", e.target.value, e.currentTarget.value);
          this.props.updateFilter(field, !this.props.filters.autobook);
          break;
        case 'sortOrder':
          this.props.updateFilter(field, e.target.value);
          break;
        // case 'clear':
        //   this.props.updateFilter(field, 'clear');
        //   break;
        default:
          break;
      }
    };
  }

  checkBoxStatus(field){
    switch(field) {
      case 'autobook':
        return (this.props.filters.autobook ? "checkbox-checked" : "checkbox-empty");

      case 'skill-standing':
        return (this.props.filters.skill === 'standing' ? "checkbox-checked" : "checkbox-empty");
      case 'skill-sitting':
        return (this.props.filters.skill === 'sitting' ? "checkbox-checked" : "checkbox-empty");
      case 'skill-moving':
        return (this.props.filters.skill === 'moving' ? "checkbox-checked" : "checkbox-empty");

      case 'location-SF':
        return (this.props.filters.location === 'SF' ? "checkbox-checked" : "checkbox-empty");
      case 'location-NY':
        return (this.props.filters.location === 'NY' ? "checkbox-checked" : "checkbox-empty");

      case 'sortOrder-rate-low':
        return (this.props.filters.sortOrder === 'rate-low' ? "checkbox-checked" : "checkbox-empty");
      case 'sortOrder-rate-high':
        return (this.props.filters.sortOrder === 'rate-high' ? "checkbox-checked" : "checkbox-empty");

      default:
        return "checkbox-checked";
    }
  }


  updateSliderMinMax() {
    return (e) => {
      this.setState({minRate: e.values[0], maxRate: e.values[1]});
    };
  }
  // <label>
  //   Date:
  //
  //   <input type="date" value={this.props.filters.date} onChange={this.filterChangeHandler('date')}/>
  // </label>


  // <select name="skill" value={this.props.filters.skill} onChange={this.filterChangeHandler('skill')}>
  //   <option value="" disabled>Select a Task Type</option>
  //   <option value="standing">Standing</option>
  //   <option value="sitting">Sitting</option>
  //   <option value="moving">Moving</option>
  // </select>

  // <select name="sortOrder" value={this.props.filters.sortOrder} onChange={this.filterChangeHandler('sortOrder')}>
  //   <option value="" disabled >Select a Sort Order</option>
  //   <option value="rate-low">Price: Low to High</option>
  //   <option value="rate-high">Price: High to Low</option>
  // </select>


  // <select name="location" value={this.props.filters.location} onChange={this.filterChangeHandler('location')}>
  //   <option value="" disabled >Select a Location</option>
  //   <option value="SF">SF</option>
  //   <option value="NY">NY</option>
  // </select>


  render() {
    const { focused, date } = this.state;

    return (
      <div className="filters-container">

        <div className="date-and-clear-filter-container">

          <SingleDatePicker
            id="date_input"
            date={this.state.date}
            focused={this.state.focused}
            numberOfMonths={1}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            />

          <button
            className="button-clear-filters" onClick={this.handleClearFilter} >
            Clear Filters
          </button>

        </div>

        <div className="location-filter-container">
          <div className="location-filter-description">
            Location:
          </div>
          <div className="location-filter-checkboxes">
            <label>New York City
              <button className={this.checkBoxStatus('location-NY')} onClick={this.filterChangeHandler('location-NY')}></button>
            </label>
            <label>San Francisco
              <button className={this.checkBoxStatus('location-SF')} onClick={this.filterChangeHandler('location-SF')}></button>
            </label>
          </div>
        </div>

        <div className="skill-filter-container">
          <div className="skill-filter-description">
            Task:
          </div>
          <div className="skill-filter-checkboxes">
            <label>Standing
              <button className={this.checkBoxStatus('skill-standing')} onClick={this.filterChangeHandler('skill-standing')}></button>
            </label>
            <label>Sitting
              <button className={this.checkBoxStatus('skill-sitting')} onClick={this.filterChangeHandler('skill-sitting')}></button>
            </label>
            <label>Moving
              <button className={this.checkBoxStatus('skill-moving')} onClick={this.filterChangeHandler('skill-moving')}></button>
            </label>
          </div>
        </div>


        <div className="instant-book-filter-container">
          <div className="instant-book-filter-checkboxes">
            <label>Instant Booking
              <button className={this.checkBoxStatus('autobook')} onClick={this.filterChangeHandler('autobook')}></button>
            </label>
          </div>
        </div>


        <div className="sort-filter-container">
          <div className="sort-filter-description">
            Rate (Sort Order):
          </div>
          <div className="sort-filter-checkboxes">
            <label>Low to High
              <button className={this.checkBoxStatus('sortOrder-rate-low')} onClick={this.filterChangeHandler('sortOrder-rate-low')}></button>
            </label>
            <label>High to Low
              <button className={this.checkBoxStatus('sortOrder-rate-high')} onClick={this.filterChangeHandler('sortOrder-rate-high')}></button>
            </label>

          </div>
        </div>


        <div className="rate-filter-container">
          <div className="rate-filter-description">
            Rate ($/hr):
          </div>
          <div className="rate-filter-slider">
            <Rheostat
              min={0}
              max={30}
              values={[this.state.minRate,this.state.maxRate]}
              onChange={this.filterChangeHandler('rates')}
              onValuesUpdated={this.updateSliderMinMax()}
            />
          </div>
          <div className="rate-filter-min-max">
            <div> {"$" + this.state.minRate} </div>
            <div> {"$" + this.state.maxRate} </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Filters;
// <div className="max-results-filter-container">
//   <div className="max-results-filter-description">
//     Max Results [5,10,15,20,50]
//     **TBD**
//   </div>
// </div>
