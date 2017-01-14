import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TaskersReducer from './taskers_reducer';
import FiltersReducer from './filters_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  taskers: TaskersReducer,
  filters: FiltersReducer
});

export default rootReducer;
