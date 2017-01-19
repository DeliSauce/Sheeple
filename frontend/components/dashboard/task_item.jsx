import React from 'react';

class TaskItem extends React.Component {
  constructor(props){
    super(props);
  }

  cancelTaskRequest(){
    return () => this.props.deleteTask(this.props.task.id);
  }

  cancelRequestButton() {
    if (this.props.task.status === 'pending'){
      return (
        <button className="task-button-enabled" onClick={this.cancelTaskRequest()} >Cancel Booking</button>
      );
    } else {
      return (<div className="task-button-disabled" ></div>);
    }
  }

 render (){
    return (
      <li className="task-item">
        <div className="task-item-task-details">
          <div>
            {"Location: " + this.props.task.location}
          </div>
          <div>
            {"Date: " + this.props.task.date}
          </div>
          <div>
            {"Status: " + this.props.task.status}
          </div>
          {this.cancelRequestButton()}
        </div>

        <div className="task-item-tasker-details">
          <img className="profile-img" src={"http://res.cloudinary.com/delisauce/image/upload/c_crop,h_1100,w_1000/v1484780832/Profile/" + this.props.task.tasker.profile_img_link} />
          <div>
            {this.props.task.tasker.first_name + " " + this.props.task.tasker.last_name}
          </div>
        </div>


        <div className="task-item-task-description">
          {"Task Description " + this.props.task.description}
        </div>


      </li>
    );
  }
}

export default TaskItem;
