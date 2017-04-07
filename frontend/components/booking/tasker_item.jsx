import React from 'react';
import FormContainer from './form_container';

class TaskerItem extends React.Component {
  constructor(props){
    super(props);
    this.openBookingForm = this.openBookingForm.bind(this);
  }

  openBookingForm(){
    this.props.updateBookingTasker(this.props.tasker);
    this.props.toggleBookingForm();
  }

  bookingButtonToggle(bool){
    if (bool) {
      return (
        <button onClick={this.openBookingForm} className="button instant-book">
          Instant<br/>Booking
        </button>
      );
    } else {
      return (
        <button onClick={this.openBookingForm} className="button normal-book">
          Request<br/>Booking
        </button>
      );
    }
  }

 render (){
    return (
      <li className="search-result-item">

        <div className="profile-img-data-container">
          <img className="profile-img" src={"http://res.cloudinary.com/delisauce/image/upload/v1484881848/Profile/" + this.props.tasker.profile_img_link} />


          <div className="profile-data">
            <div>
              {this.props.tasker.first_name + " " + this.props.tasker.last_name + " (" + this.props.tasker.location + ")"  }
            </div>
            <div>
              {"Rate: $" + this.props.tasker.rate + "/hr"}
            </div>
            <div className={"skill-icon-" + this.props.tasker.skill}></div>
          </div>
        </div>

        <div className="profile-description ellipsis">
          {this.props.tasker.description}
        </div>

        <div className="profile-buttons">
          <div>
            {this.bookingButtonToggle(this.props.tasker.auto_book)}
          </div>
        </div>
      </li>
    );
  }
}

export default TaskerItem;
