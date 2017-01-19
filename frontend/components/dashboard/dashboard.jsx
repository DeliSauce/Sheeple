import React from 'react';
import TaskItem from './task_item';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTasks(this.props.userId); // TODO need to actually change this to currentUser id #
  }

  render() {
    let tasks = [];
    if (this.props.tasks.length !== undefined) {
      tasks = this.props.tasks.map((task, idx) => <TaskItem key={idx} deleteTask={this.props.deleteTask} task={task}/>);
    }
    if (this.props.tasks.length === 0){
      tasks = <div className="empty-dashboard-response">You don't appear to have any bookings yet. Why don't you go find yourself a warm body.</div>
    }

    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <span className="dashboard-header-title">Bookings Dashboard</span>
        </div>
        {tasks}
      </div>
    );
  }
}

export default Dashboard;
