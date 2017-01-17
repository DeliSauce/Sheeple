import {RECEIVE_BOOKING_ERRORS} from '../actions/booking_actions';
import merge from 'lodash/merge';

// const nullState = Object.freeze({currentUser: null, errors: []});
const nullState = Object.freeze({errors: []});


const BookingReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return merge({}, nullState, {errors: action.errors});
    default:
      return state;
  }
};

export default BookingReducer;
