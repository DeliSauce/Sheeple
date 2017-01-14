import { connect } from 'react-redux';
import {fetchTaskers} from '../../actions/tasker_actions';
import SearchResults from './search_results';

const mapStateToProps = (state) => ({
  taskers: Object.keys(state.taskers).map((id) => state.taskers[id]),
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  fetchTaskers: (filters) => dispatch(fetchTaskers(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
