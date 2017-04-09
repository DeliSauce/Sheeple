import {LOGIN_FORM_MODAL, SIGNUP_FORM_MODAL, BOOKING_FORM_MODAL} from '../actions/modal_actions';
import merge from 'lodash/merge';

const defaultState = {login: false, signup: false, booking: false};

const ModalsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case LOGIN_FORM_MODAL:
      return merge({}, defaultState, {login: !state.login});
    case SIGNUP_FORM_MODAL:
      return merge({}, defaultState, {signup: !state.signup});
    case BOOKING_FORM_MODAL:
      return merge({}, defaultState, {booking: !state.booking});
    default:
      return state;
  }
};

export default ModalsReducer;
