import React from 'react';
import TaskerItem from './tasker_item';


class Booking extends React.Component {

  componentDidMount() {
    this.props.fetchTaskers();
  }

  render() {
    let taskers = this.props.taskers.map((tasker) => <TaskerItem tasker={tasker}/>);
    console.log(taskers, this.props);
    return (
      <div>
        BOOKING PAGE
        <ul>
          {taskers}
        </ul>
      </div>
    );
  }
}

export default Booking;
