import {RECEIVE_TASKS, REMOVE_TASK, CLEAR_TASKS} from '../actions/task_actions';
import merge from 'lodash/merge';

const TasksReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case REMOVE_TASK:
      let newState = [];
      state.forEach((task) => {
        if(task.id !== action.task.id) {
          newState.push(task);
        }
      });
      return newState;
    case CLEAR_TASKS:
      return [];
    default:
      return state;
  }
};

export default TasksReducer;
