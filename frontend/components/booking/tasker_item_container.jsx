import { connect } from 'react-redux';
// import {fetchTaskers} from '../../actions/tasker_actions';
import {updateBookingTasker} from '../../actions/booking_actions';
import {toggleBookingForm} from '../../actions/modal_actions';
import TaskerItem from './tasker_item';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
  toggleBookingForm: () => dispatch(toggleBookingForm()),
  updateBookingTasker: (tasker) => dispatch(updateBookingTasker(tasker))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskerItem);
