import React from 'react';
import TaskerItem from './tasker_item';

class SearchResults extends React.Component {

  //remove?
  componentDidMount() {
    this.props.fetchTaskers(this.props.filters);
  }


  render() {


    let taskers = [];
    console.log(this.props.taskers);

    // debugger;

    if (this.props.taskers.length !== undefined) {
      taskers = this.props.taskers.map((tasker, idx) => <TaskerItem key={idx} tasker={tasker}/>);
    }

    // debugger;


    return (
      <div className="search-results-container">
        {taskers}
      </div>
    );
  }
}

export default SearchResults;
