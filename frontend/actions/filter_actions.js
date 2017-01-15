export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_SKILL = "UPDATE_SKILL";
export const UPDATE_RATES = "UPDATE_MINRATE";
// export const UPDATE_MAXRATE = "UPDATE_MAXRATE";
export const UPDATE_AUTOBOOK = "UPDATE_AUTOBOOK";
import {fetchTaskers} from './tasker_actions';

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchTaskers(getState().filters)(dispatch);
};

// export const updateFilter = (field, value) => {
export const changeFilter = (field, value) => {
  let type;
  switch(field) {
    case 'location':
      type = UPDATE_LOCATION;
      break;
    case 'rates':
      type = UPDATE_RATES;
      // debugger;
      break;
    case 'skill':
      type = UPDATE_SKILL;
      break;
  }

  return ({
    type,
    [field]: value
  });

};
// export const updateLocation = (location) => ({
//   type: UPDATE_LOCATION,
//   location
// });
//
// export const updateAutoBook = (autobook) => ({
//   type: UPDATE_AUTOBOOK,
//   autobook
// });
