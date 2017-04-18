import * as SessionApiUtil from '../util/session_api_util';
import * as UserApiUtil from '../util/user_api_util';
import {fetchTasks} from './task_actions';

export const USERNAME_AVAILABILITY = 'USERNAME_AVAILABILITY';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// regular actions creators:
export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const receiveUsernameAvailability = (availability) => ({
  type: USERNAME_AVAILABILITY,
  errors: availability
});

export const checkUserNameAvailability = (user) => dispatch => (
  UserApiUtil.checkUserName(user).then(
    (availability) => {
      console.log(availability);
      dispatch(receiveUsernameAvailability(availability));
    }
  )
);

export const signup = (newUser) => dispatch => (
    SessionApiUtil.signup(newUser)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (errors) => {
        dispatch(receiveErrors(errors.responseJSON));
        console.log("errors:",  errors);
        console.log("errors.responseJSON:",  errors.responseJSON);
      }
    )
);

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
    .then(
      (user) => {
        dispatch(receiveCurrentUser(user));
        // return fetchTasks()(dispatch);
      },
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(
      (user) => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);
