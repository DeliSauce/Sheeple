import React from 'react';
import TaskItem from './task_item';
import {Link} from 'react-router';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {

    let pendingTasks = [];
    let completedTasks = [];
    let bookedTasks = [];

    if (this.props.tasks.length !== undefined) {
      this.props.tasks.forEach(
        (task, idx) => {
          let cutoffDate = new Date();
          cutoffDate.setDate(cutoffDate.getDate() - 1);
          let taskDate = new Date(task.date);
          if (taskDate < cutoffDate) {
            completedTasks.push(<TaskItem key={idx} className="status-completed" deleteTask={this.props.deleteTask} task={task}/>);
          } else if (task.status === 'pending')  {
            pendingTasks.push(<TaskItem key={idx} className="status-pending" deleteTask={this.props.deleteTask} task={task}/>);
          } else if (task.status === 'booked')  {
            bookedTasks.push(<TaskItem key={idx} className="status-booked" deleteTask={this.props.deleteTask} task={task}/>);
          }
        }
    );
    }

    // console.log(this.props.tasks.length);

    if (this.props.tasks.length === 0){
      pendingTasks =
      <div className="empty-dashboard-response">
        You don't appear to have any bookings yet
        . Why don't you hit up the <Link to="/booking">Search Page</Link>.
      </div>;
    }

    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <span className="dashboard-header-title">Bookings Dashboard</span>
        </div>

        <div className="dashboard-tasks-container">
          <div className="task-status-container">
            <div className="task-status-header">Booked</div>
            {bookedTasks}
          </div>
          <div className="task-status-container">
            <div className="task-status-header">Pending</div>
            {pendingTasks}
          </div>
          <div className="task-status-container">
            <div className="task-status-header">Completed</div>
            {completedTasks}
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;
