import {RECEIVE_TASKERS} from '../actions/tasker_actions';
import merge from 'lodash/merge';

const TaskersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKERS:
      // console.log("in tasker reducer, receive taskers");
      return action.taskers;
    default:
      return state;
  }
};

export default TaskersReducer;
