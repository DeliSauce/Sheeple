import { UPDATE_LOCATION, UPDATE_SKILL, UPDATE_AUTOBOOK } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultState = {
  location: "SF",
  skill: "",
  autobook: "",
  minRate: 0,
  maxRate: 100
};

const FiltersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case UPDATE_SKILL:
      console.log("hit the skill in filters reducer");
      return merge(newState, {skill: action.skill});
    case UPDATE_LOCATION:
      console.log("hit the location in filters reducer");
      return merge(newState, {location: action.location});
    case UPDATE_AUTOBOOK:
      console.log("hit the autobook in filters reducer");
      return merge(newState, {autobook: action.autobook});
    default:
      return state;
  }
};

export default FiltersReducer;
