import { connect } from 'react-redux';
import { login, logout, signup, clearErrors} from '../../actions/session_actions';
import {toggleSessionForm} from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loginModalStatus: state.modals.login,
  signupModalStatus: state.modals.signup,
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  // formType: ownProps.formType
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.formType === 'login') ? login : signup;

  return {
    toggleSessionForm: (formType) => dispatch(toggleSessionForm(formType)),
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
