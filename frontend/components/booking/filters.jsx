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
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  filterChangeHandler(field) {
    return (e) => {
      switch (field) {
        case 'date':
          this.props.updateFilter(field, e.target.value);
          break;
        case 'location':
          this.props.updateFilter(field, e.target.value);
          break;
        case 'rates':
          this.props.updateFilter(field, [e.values[0], e.values[1]]);
          break;
        case 'skill':
          this.props.updateFilter(field, e.target.value);
          break;
        case 'autobook':
          console.log("autobook:", e.target.value, e.currentTarget.value);
          // this.props.updateAutoBook(e.target.value);
          break;
        case 'sortOrder':
          this.props.updateFilter(field, e.target.value);
          break;
        default:
          break;
      }
    };
  }

  checkedAutoBook(){
    return (this.props.filters.autobook ? "checked" : "");
  }


  updateSliderMinMax() {
    return (e) => {
      this.setState({minRate: e.values[0], maxRate: e.values[1]});
    };
  }

  render() {
    const { focused, date } = this.state;
    return (
      <div className="filters-container">

        <label>
          Date:

          <input type="date" value={this.props.filters.date} onChange={this.filterChangeHandler('date')}/>
        </label>

        <label>
          Date:
          <SingleDatePicker

            id="date_input"
            date={this.state.date}
            focused={this.state.focused}

            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
          />
        </label>

        <label>
          Skill:
          <select name="skill" value={this.props.filters.skill} onChange={this.filterChangeHandler('skill')}>
            <option value="" disabled>Select a Task Type</option>
            <option value="standing">Standing</option>
            <option value="sitting">Sitting</option>
            <option value="wandering">Wandering</option>
          </select>
        </label>


        <label>
          $/hr: <Rheostat
          min={0}
          max={50}
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
          Location:
          <select name="location" value={this.props.filters.location} onChange={this.filterChangeHandler('location')}>
            <option value="" disabled >Select a Location</option>
            <option value="SF">SF</option>
            <option value="NY">NY</option>
          </select>
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
          Max Results [5,10,15,20,50]
          **perhaps put this in user settings**

        </label>

        <label>
          AutoBook Only
          **need to see if I can set to state or maybe even change to a button**
          <input type="checkbox" onClick={this.filterChangeHandler('autobook')}/>
        </label>

      </div>
    );
  }
}

export default Filters;
