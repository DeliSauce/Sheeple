import React from 'react';
import Rheostat from 'rheostat';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.filters;
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.updateSliderMinMax = this.updateSliderMinMax.bind(this);
  }

  filterChangeHandler(field) {
    return (e) => {
      switch (field) {
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
          // debugger;
          console.log("autobook:", e.target.value, e.currentTarget.value);
          // this.props.updateAutoBook(e.target.value);
          break;
        default:
          break;
      }
    };
  }

  componentDidUpdate() {
    this.props.fetchTaskers(this.props.filters);
  }

  checkedAutoBook(){
    return (this.props.filters.autobook ? "checked" : "");
  }

  handleSlider(){
    return (e) => {
      // debugger;
      console.log('min: ', e.values[0], '  max: ', e.values[1]);
    };
  }

  updateSliderMinMax() {
    return (e) => {
      this.setState({minRate: e.values[0], maxRate: e.values[1]});
    };
  }

  render() {

    return (
      <div className="filters-container">

        <label>
          Date:
          <input type="date" />
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
          AutoBook Only
          <input type="checkbox" onClick={this.filterChangeHandler('autobook')}/>
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

      </div>
    );
  }
}

export default Filters;
