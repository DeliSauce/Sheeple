import React from 'react';

class TaskItem extends React.Component {
  constructor(props){
    super(props);
  }

  cancelTaskRequest(){
    return () => this.props.deleteTask(this.props.task.id);
  }

  cancelRequestButton() {
    let cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 1);
    let taskDate = new Date(this.props.task.date);
    if (this.props.task.status === 'pending' && taskDate >= cutoffDate){
      return (
        <button className="task-button-enabled button" onClick={this.cancelTaskRequest()} >Cancel Booking</button>
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
        <div className="task-item-top">

          <div className="task-item-task-left">
            <div>
              {"Who: " + this.props.task.tasker.first_name + " " + this.props.task.tasker.last_name}
            </div>
            <div>
              {"When: " + this.props.task.date}
            </div>
            <div>
              {"Where: " + this.props.task.location}
            </div>
          </div>


            {this.cancelRequestButton()}

        </div>

        <div className="task-item-bottom ellipsis">
          <div>{"What: " + this.props.task.description}</div>
        </div>

      </li>
    );
  }
}

export default TaskItem;
