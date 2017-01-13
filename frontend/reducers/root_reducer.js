import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TaskersReducer from './taskers_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  taskers: TaskersReducer
});

export default rootReducer;
