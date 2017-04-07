import {SESSION_FORM_MODAL, BOOKING_FORM_MODAL} from '../actions/modal_actions';
import merge from 'lodash/merge';

const defaultState = {session: false, booking: false};

const ModalsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SESSION_FORM_MODAL:
      return merge({}, defaultState, {session: !state.session});
    case BOOKING_FORM_MODAL:
      return merge({}, defaultState, {booking: !state.booking});
    default:
      return state;
  }
};

export default ModalsReducer;
