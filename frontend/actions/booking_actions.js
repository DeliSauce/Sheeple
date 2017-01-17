import * as APIUtil from '../util/task_api_util';

export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";



export const receiveBookingErrors = (errors) => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const submitBooking = (task) => (dispatch) => (
    APIUtil.createTask(task)
    .then(
      (success) => console.log("SUCCESS", success),
      (errors) => dispatch(receiveBookingErrors(errors.responseJSON))
    )
);

// (user) => dispatch(receiveCurrentUser(user)),
// (errors) => dispatch(receiveErrors(errors.responseJSON))
