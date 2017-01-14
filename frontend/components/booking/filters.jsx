import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.updateFilter.bind(this);
    this.state = this.props.filters;
  }

  updateFilter(field) {
    return (e) => {
      switch (field) {
        case 'location':
          this.props.updateLocation(e.target.value);
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

  render() {

    return (
      <div className="filters-container">

        <label>
          Date:
          <input type="date" />
        </label>

        <label>
          Skill:
          <select name="skill">
            <option selected disabled>Select a Task Type</option>
            <option value="standing">Standing</option>
            <option value="sitting">Sitting</option>
            <option value="wandering">Wandering</option>
          </select>
        </label>

        <label>
          AutoBook Only
          <input type="checkbox" onClick={this.updateFilter('autobook')}/>
        </label>

        <label>
          $/hr: USE AIRBNB RHEOSTAT??
        </label>

        <label>
          Location:
          <select name="location" value={this.props.filters.location} onChange={this.updateFilter('location')}>
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
