// import {connect} from 'react-redux';
// import SessionForm from './session_form';
// import {login, signup} from '../../actions/session_actions';
//
// const mapStateToProps = (state, ownProps) => {
//   const loggedin = state.session.currentUser !== null;
//   const errors = state.session.errors;
//   const formType = (ownProps.location.pathname === '/login' ? 'login' : 'signup');
//   return {loggedin, errors, formType};
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   const action = (ownProps.location.pathname === '/login' ? login : signup);
//   return {processForm: (user) => dispatch(action(user))};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
