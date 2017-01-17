import React from 'react';

class TaskerItem extends React.Component {
  constructor(props){
    super(props);
  }

  cancelTaskRequest(){
    return () => this.props.deleteTask(this.props.task.id);
  }

  cancelRequestButton() {
    if (this.props.task.status === 'pending'){
      return (
        <button onClick={this.cancelTaskRequest()} >Cancel Booking</button>
      );
    }
  }

 render (){
    return (
      <li className="search-result-item">

        <div>
          {"Task Description " + this.props.task.description}
        </div>
        <div>
          {"Location: " + this.props.task.location}
        </div>
        <div>
          {"Date: " + this.props.task.date}
        </div>
        <div>
          {"Tasker(update with user name): " + this.props.task.tasker_id}
          {"TaskID: " + this.props.task.id}
        </div>
        <div>
          {"Status: " + this.props.task.status}
        </div>

        {this.cancelRequestButton()}

      </li>
    );
  }
}

export default TaskerItem;
