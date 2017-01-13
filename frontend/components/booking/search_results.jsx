import React from 'react';
import TaskerItem from './tasker_item';

class SearchResults extends React.Component {

  componentDidMount() {
    this.props.fetchTaskers();
  }

  render() {
    let taskers = this.props.taskers.map((tasker, idx) => <TaskerItem key={idx} tasker={tasker}/>);
    console.log(taskers, this.props);
    return (
      <div className="results-container">
        <ul>
          {taskers}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
