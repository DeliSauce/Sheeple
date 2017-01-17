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

    return (
      <div>
        {tasks}
      </div>
    );
  }
}

export default Dashboard;
