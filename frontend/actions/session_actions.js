import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// regular actions creators:
export const receiveCurrentUser = (currentUser) => {
  debugger;
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  debugger;
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
// export const receiveErrors = (errors) => ({
//   type: RECEIVE_ERRORS,
//   errors
// });

// thunk actions creators:
export const signup = (newUser) => dispatch => (
    SessionApiUtil.signup(newUser)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
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
