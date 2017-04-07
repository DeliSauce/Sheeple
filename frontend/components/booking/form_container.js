import { connect } from 'react-redux';
import {submitBooking, clearBookingErrors} from '../../actions/booking_actions';
import {toggleBookingForm} from '../../actions/modal_actions';
import Form from './form';

const mapStateToProps = (state, ownProps) => ({
  filters: state.filters,
  user_id: state.session.currentUser.id,
  errors: state.booking.errors,
  tasker: state.booking.tasker,
  bookingModalStatus: state.modals.booking
});

const mapDispatchToProps = (dispatch) => ({
  submitBooking: (task, successCallback) => dispatch(submitBooking(task, successCallback)),
  toggleBookingForm: () => dispatch(toggleBookingForm()),
  clearBookingErrors: () => dispatch(clearBookingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
