import { connect } from 'react-redux';
import {submitBooking} from '../../actions/booking_actions';
import Form from './form';

const mapStateToProps = (state, ownProps) => ({
  filters: state.filters,
  user_id: state.session.currentUser.id,
  errors: state.booking.errors
});

const mapDispatchToProps = (dispatch) => ({
  submitBooking: (task, successCallback) => dispatch(submitBooking(task, successCallback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
