import { connect } from 'react-redux';
import {fetchTaskers} from '../../actions/tasker_actions';
import {clearBookingErrors} from '../../actions/booking_actions';
import SearchResults from './search_results';

const mapStateToProps = (state) => ({
  taskers: state.taskers,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTaskers: (filters) => dispatch(fetchTaskers(filters))
});

// ,
// clearBookingErrors: () => dispatch(clearBookingErrors()),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

// taskers: Object.keys(state.taskers).map((id) => state.taskers[id]),
