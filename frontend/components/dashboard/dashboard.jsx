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

    let pendingTasks = [];
    let completedTasks = [];
    let bookedTasks = [];

    let tasks = [];

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



    if (this.props.tasks.length === 0){
      tasks = <div className="empty-dashboard-response">You don't appear to have any bookings yet. Why don't you go find yourself a warm body.</div>
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
