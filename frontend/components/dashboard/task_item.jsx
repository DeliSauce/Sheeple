import React from 'react';

class TaskItem extends React.Component {
  constructor(props){
    super(props);
  }

  cancelTaskRequest(){
    return () => this.props.deleteTask(this.props.task.id);
  }

  cancelRequestButton() {
    let today = new Date();
    let taskDate = new Date(this.props.task.date);
    if (this.props.task.status === 'pending' && today >= taskDate){
      return (
        <button className="task-button-enabled" onClick={this.cancelTaskRequest()} >Cancel Booking</button>
      );
    } else {
      return (<div className="task-button-disabled" ></div>);
    }
  }

 render (){
  //  <div className="task-item-tasker-details">
  //    <img className="profile-img" src={"http://res.cloudinary.com/delisauce/image/upload/c_crop,h_1100,w_1000/v1484780832/Profile/" + this.props.task.tasker.profile_img_link} />
  //    <div>
  //      {this.props.task.tasker.first_name + " " + this.props.task.tasker.last_name}
  //    </div>
  //  </div>
    return (
      <li className={"task-item " + this.props.className}>
        <div className="task-item-task-details">
          <div>
            {"Location: " + this.props.task.location}
          </div>
          <div>
            {"Date: " + this.props.task.date}
          </div>
          <div>
             {"Body: " + this.props.task.tasker.first_name + " " + this.props.task.tasker.last_name}
           </div>
          {this.cancelRequestButton()}
        </div>



        <div className="task-item-task-description">
          <div>Description</div>
          <div>{this.props.task.description}</div>
        </div>


      </li>
    );
  }
}

export default TaskItem;
