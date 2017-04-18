import {USERNAME_AVAILABILITY, RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullState = Object.freeze({currentUser: null, errors: []});

const SessionReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case USERNAME_AVAILABILITY:
      let errors = merge([], action.errors, state.errors);
      return merge({}, nullState, {errors: action.errors});
    case RECEIVE_CURRENT_USER:
      return merge({}, nullState, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return merge({}, nullState, {errors: action.errors});
    case CLEAR_ERRORS:
      return merge({}, nullState);
    default:
      return state;
  }
};

export default SessionReducer;
