import * as APIUtil from '../util/tasker_api_util';

export const RECEIVE_TASKERS = "RECEIVE_TASKERS";


export const receiveTaskers = (taskers) => ({
  type: RECEIVE_TASKERS,
  taskers
});


export const fetchTaskers = (filters) => (dispatch) => (
  APIUtil.fetchTaskers(filters).then((taskers) => dispatch(receiveTaskers(taskers)))
);
