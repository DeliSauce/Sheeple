import React from 'react';
import TaskerItem from './tasker_item';

class SearchResults extends React.Component {

  //remove?
  componentDidMount() {
    this.props.fetchTaskers(this.props.filters);
  }


  render() {
    let taskers = [];
    if (this.props.taskers.length !== undefined) {
      taskers = this.props.taskers.map((tasker, idx) => <TaskerItem key={idx} tasker={tasker}/>);
    }

    return (
      <div className="search-results-container">
        {taskers}


      </div>
    );
  }
}

export default SearchResults;
