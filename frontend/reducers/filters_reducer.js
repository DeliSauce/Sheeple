import { UPDATE_LOCATION } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultState = {
  location: "SF",
  skill: "",
  autobook: false,
  minRate: 0,
  maxRate: 100
};

const FiltersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case UPDATE_LOCATION:
      console.log("hit the location in filters reducer");

      return merge(newState, {location: action.location});
    default:
      return state;
  }
};

export default FiltersReducer;
