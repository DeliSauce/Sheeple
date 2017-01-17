import {RECEIVE_TASKS, REMOVE_TASK} from '../actions/task_actions';
import merge from 'lodash/merge';

const TasksReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TASKS:
      console.log("task reducer: receive tasks");
      return action.tasks;
    case REMOVE_TASK:
      let newState = [];
      state.forEach((task) => {
        if(task.id !== action.task.id) {
          newState.push(task);
        }
      });
      console.log("task reducer: remove task");
      return newState; //need to figure out the structure of state
    default:
      return state;
  }
};

export default TasksReducer;
