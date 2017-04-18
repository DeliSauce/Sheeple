export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_SKILL = "UPDATE_SKILL";
export const UPDATE_RATES = "UPDATE_MINRATE";
export const UPDATE_AUTOBOOK = "UPDATE_AUTOBOOK";
export const UPDATE_SORT_ORDER = "UPDATE_SORT_ORDER";
export const UPDATE_DATE = "UPDATE_DATE";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

import {fetchTaskers} from './tasker_actions';

// async action
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchTaskers(getState().filters)(dispatch);
};

// synchronous action
export const changeFilter = (field, value) => {
  let type;
  switch(field) {
    case 'date':
      type = UPDATE_DATE;
      break;
    case 'location':
      type = UPDATE_LOCATION;
      break;
    case 'rates':
      type = UPDATE_RATES;
      break;
    case 'skill':
      type = UPDATE_SKILL;
      break;
    case 'sortOrder':
      type = UPDATE_SORT_ORDER;
      break;
    case 'autobook':
      type = UPDATE_AUTOBOOK;
      break;
    case 'clear':
      type = CLEAR_FILTERS;
      break;
  }

  return ({
    type,
    [field]: value
  });

};
