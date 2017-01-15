import React from 'react';
import TaskerItem from './tasker_item';

class SearchResults extends React.Component {

  componentDidMount() {
    this.props.fetchTaskers(this.props.filters);
  }

  // componentDidUpdate() {
  //   this.props.fetchTaskers(this.props.filters);
  // }

  render() {
    let taskers = this.props.taskers.map((tasker, idx) => <TaskerItem key={idx} tasker={tasker}/>);
    console.log(taskers, this.props);
    return (
      <div className="search-results-container">
        {taskers}
      </div>
    );
  }
}

export default SearchResults;
// {taskers}
