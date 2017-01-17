import { UPDATE_DATE, UPDATE_LOCATION, UPDATE_SKILL, UPDATE_RATES, UPDATE_AUTOBOOK, UPDATE_SORT_ORDER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultState = {
  location: "",
  skill: "",
  autobook: "",
  minRate: 0,
  maxRate: 50,
  sortOrder: "",
  date: "2015-05-12"
};


const FiltersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case UPDATE_SKILL:
      console.log("hit the skill in filters reducer");
      return merge(newState, {skill: action.skill});
    case UPDATE_DATE:
      console.log("hit the date in filters reducer");
      return merge(newState, {date: action.date});
    case UPDATE_RATES:
      console.log("hit the rates in filters reducer");
      newState = merge(newState, {minRate: action.rates[0], maxRate: action.rates[1]});
      return newState;
    case UPDATE_LOCATION:
      console.log("hit the location in filters reducer");
      return merge(newState, {location: action.location});
    case UPDATE_AUTOBOOK:
      console.log("hit the autobook in filters reducer");
      return merge(newState, {autobook: action.autobook});
    case UPDATE_SORT_ORDER:
      console.log("hit the sort order in filters reducer");
      return merge(newState, {sortOrder: action.sortOrder});
    default:
      return state;
  }
};

export default FiltersReducer;
