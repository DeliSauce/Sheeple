import React from 'react';

const bookingButtonToggle = (bool) => {
  if (bool) {
    return (
      <button className="instant-book">
        Instant Booking
      </button>
    );
  } else {
    return (
      <button className="normal-book">
        Request Booking
      </button>
    );
  }
};

const TaskerItem = (props) => (
  <li className="search-result-item">

    <div className="profile-img">
      <img src={props.tasker.profile_img_link} />
    </div>

    <div className="profile-data">
      <div>
        {props.tasker.first_name + " " + props.tasker.last_name + " (" + props.tasker.location + ")"  }
      </div>
      <div>
        {"Rate: $" + props.tasker.rate + "/hr"}
      </div>
      <div>
        {"Skillset: " + props.tasker.skill}
      </div>
    </div>

    <div className="profile-description">
      {props.tasker.description}
    </div>

    <div className="profile-buttons">
      <div>
        {bookingButtonToggle(props.tasker.auto_book)}
      </div>
    </div>
  </li>
);

export default TaskerItem;
