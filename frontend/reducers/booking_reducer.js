import {UPDATE_BOOKING_TASKER, RECEIVE_BOOKING_ERRORS, CLEAR_BOOKING_ERRORS} from '../actions/booking_actions';
import merge from 'lodash/merge';

// const nullState = Object.freeze({currentUser: null, errors: []});
const nullState = Object.freeze({tasker: null, errors: []});

const BookingReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_BOOKING_TASKER:
      return merge({}, state, {tasker: action.tasker});
    case RECEIVE_BOOKING_ERRORS:
      return merge({}, state, {errors: action.errors});
    case CLEAR_BOOKING_ERRORS:
      // 'merge' won't work with an obect with only one value that is an
      //empty array (it will be ignored) so have to return this object
      //instead.
      return {tasker: state.tasker, errors: []};
    default:
      return state;
  }
};

export default BookingReducer;
