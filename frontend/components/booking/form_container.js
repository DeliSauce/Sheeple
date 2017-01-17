import { connect } from 'react-redux';
import {submitBooking} from '../../actions/booking_actions';
import Form from './form';

const mapStateToProps = (state, ownProps) => ({
  filters: state.filters,
  tasker: ownProps.tasker,
  user_id: state.session.currentUser.id,
  errors: state.booking.errors
});

const mapDispatchToProps = (dispatch) => ({
  submitBooking: (task) => dispatch(submitBooking(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
