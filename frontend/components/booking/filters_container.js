import { connect } from 'react-redux';
import Filters from './filters';
import {updateLocation, updateAutoBook} from '../../actions/filter_actions';
import {fetchTaskers} from '../../actions/tasker_actions';


const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  updateLocation: (location) => dispatch(updateLocation(location)),
  updateAutoBook: (autobook) => dispatch(updateAutoBook(autobook)),
  fetchTaskers: (filters) => dispatch(fetchTaskers(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
