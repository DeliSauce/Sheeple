import { connect } from 'react-redux';
import Filters from './filters';
import {updateLocation} from '../../actions/filter_actions';
import {fetchTaskers} from '../../actions/tasker_actions';


const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  updateLocation: (location) => dispatch(updateLocation(location)),
  fetchTaskers: (filters) => dispatch(fetchTaskers(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
