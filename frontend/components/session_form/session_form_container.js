import { connect } from 'react-redux';
import { login, logout, signup, clearErrors} from '../../actions/session_actions';
import {toggleSessionForm} from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loginModalStatus: state.modals.login,
  signupModalStatus: state.modals.signup,
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // const processForm = (ownProps.loginModalStatus) ? login : signup;

  return {
    toggleSessionForm: (formType) => dispatch(toggleSessionForm(formType)),
    clearErrors: () => dispatch(clearErrors()),
    processLoginForm: (user) => dispatch(login(user)),
    processSignupForm: (user) => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
