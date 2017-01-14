import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(field) {
    return (e) => {
      this.props.updateLocation(e.target.value);
      // this.props.fetchTaskers(this.props.filters);
    };
  }

  componentDidUpdate() {
    this.props.fetchTaskers(this.props.filters);
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
          AutoBook
          <input type="checkbox" />
        </label>

        <label>
          $/hr: USE AIRBNB RHEOSTAT??
        </label>

        <label>
          Location:
          <select name="location" onChange={this.updateFilter('loc')}>
            <option selected disabled>Select a Location</option>
            <option value="SF">SF</option>
            <option value="NY">NY</option>
          </select>
        </label>

      </div>
    );
  }
}

export default Filters;
