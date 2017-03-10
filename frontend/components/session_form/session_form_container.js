import { connect } from 'react-redux';
import { login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.formType
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
