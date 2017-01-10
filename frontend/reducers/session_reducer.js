import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullState = Object.freeze({currentUser: null, errors: []});

const SessionReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      return merge({}, nullState, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      debugger;
      return merge({}, nullState, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;

//didn't include this from the solution
// case LOGOUT:
//   return merge({}, _nullUser);
