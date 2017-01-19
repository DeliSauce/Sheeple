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
  }
  onDateChange(date) {
    this.setState({ date });
    this.props.updateFilter('date', date.format("YYYY-MM-DD"));
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
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
          console.log('LOCATION SF');
          this.props.updateFilter('location', 'SF');
          break;
        case 'location-NY':
          console.log('LOCATION SF');
          this.props.updateFilter('location', 'NY');
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



  // <select name="location" value={this.props.filters.location} onChange={this.filterChangeHandler('location')}>
  //   <option value="" disabled >Select a Location</option>
  //   <option value="SF">SF</option>
  //   <option value="NY">NY</option>
  // </select>


  render() {
    const { focused, date } = this.state;

    return (
      <div className="filters-container">

        <label>
          Location:

          <label>New York City
            <button className={this.checkBoxStatus('location-NY')} onClick={this.filterChangeHandler('location-NY')}></button>
          </label>
          <label>San Francisco
            <button className={this.checkBoxStatus('location-SF')} onClick={this.filterChangeHandler('location-SF')}></button>
          </label>

        </label>

        <label>
          Skill:

          <label>Standing
            <button className={this.checkBoxStatus('skill-standing')} onClick={this.filterChangeHandler('skill-standing')}></button>
          </label>
          <label>Sitting
            <button className={this.checkBoxStatus('skill-sitting')} onClick={this.filterChangeHandler('skill-sitting')}></button>
          </label>
          <label>Moving
            <button className={this.checkBoxStatus('skill-moving')} onClick={this.filterChangeHandler('skill-moving')}></button>
          </label>

        </label>

        <label>
          Sort results by:
          <select name="sortOrder" value={this.props.filters.sortOrder} onChange={this.filterChangeHandler('sortOrder')}>
            <option value="" disabled >Select a Sort Order</option>
            <option value="rate-low">Price: Low to High</option>
            <option value="rate-high">Price: High to Low</option>
          </select>
        </label>



        <label>
          Rate ($/hr): <Rheostat
          min={0}
          max={30}
          values={[this.state.minRate,this.state.maxRate]}
          onChange={this.filterChangeHandler('rates')}
          onValuesUpdated={this.updateSliderMinMax()}
          />
        <div className="slider-min-max">
          <div> {this.state.minRate} </div>
          <div> {this.state.maxRate} </div>
        </div>
        </label>

        <label>
          Date:
          <SingleDatePicker

            id="date_input"
            date={this.state.date}
            focused={this.state.focused}
            numberOfMonths={1}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            />
        </label>


        <label>
          Max Results [5,10,15,20,50]
          **perhaps put this in user settings**

        </label>

        <label>
          Instant Booking:
          <button className={this.checkBoxStatus('autobook')} onClick={this.filterChangeHandler('autobook')}></button>
        </label>

      </div>
    );
  }
}

export default Filters;
