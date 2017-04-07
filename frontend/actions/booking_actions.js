import * as APIUtil from '../util/task_api_util';

export const UPDATE_BOOKING_TASKER = "UPDATE_BOOKING_TASKER";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";


export const updateBookingTasker = (tasker) => {
  return {
    type: UPDATE_BOOKING_TASKER,
    tasker
  };
};

export const receiveBookingErrors = (errors) => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const clearBookingErrors = () => {
  return {
    type: CLEAR_BOOKING_ERRORS
  };
};

export const submitBooking = (task, successCallback) => (dispatch) => (
    APIUtil.createTask(task)
    .then(
      (success) => successCallback(),
      (errors) => dispatch(receiveBookingErrors(errors.responseJSON))
    )
);
