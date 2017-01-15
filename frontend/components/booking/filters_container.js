import { connect } from 'react-redux';
import Filters from './filters';
import {updateFilter} from '../../actions/filter_actions';
import {fetchTaskers} from '../../actions/tasker_actions';


const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (field, value) => dispatch(updateFilter(field, value)),
  fetchTaskers: (filters) => dispatch(fetchTaskers(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

// updateAutoBook: (autobook) => dispatch(updateAutoBook(autobook)),
