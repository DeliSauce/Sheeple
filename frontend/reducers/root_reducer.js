import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TaskersReducer from './taskers_reducer';
import FiltersReducer from './filters_reducer';
import BookingReducer from './booking_reducer';
import TasksReducer from './tasks_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  taskers: TaskersReducer,
  filters: FiltersReducer,
  booking: BookingReducer,
  tasks: TasksReducer
});

export default rootReducer;
