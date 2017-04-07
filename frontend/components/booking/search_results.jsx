import React from 'react';
import TaskerItemContainer from './tasker_item_container';

class SearchResults extends React.Component {

  //remove?
  componentDidMount() {
    this.props.fetchTaskers(this.props.filters);
  }

//clearBookingErrors={this.props.clearBookingErrors}
  render() {
    let taskers = [];
    if (this.props.taskers.length !== undefined) {
      taskers = this.props.taskers.map((tasker, idx) => <TaskerItemContainer key={idx} tasker={tasker} />);
    }
    if (this.props.taskers.length === 0){
      taskers = <div className="empty-search-response">Sorry, there is no one matching your search. Please try again. </div>
    }

    return (
      <div className="search-results-container">
        {taskers}
      </div>
    );
  }
}

export default SearchResults;
