import React from 'react';


const TaskerItem = (props) => (
  <li className="tasker-item">
    <div>
      {props.tasker.first_name}
      {props.tasker.last_name}
    </div>
    <div>
      {props.tasker.description}
    </div>
    <div>
      {props.tasker.rate}
    </div>
    <div>
      {props.tasker.auto_book}
    </div>
    <div>
      {props.tasker.skill}
    </div>
    <div>
      {props.tasker.location}
    </div>
  </li>
);

export default TaskerItem;
