import { connect } from 'react-redux';
import { logout, login} from '../../actions/session_actions';
import HeaderNav from './header_nav';
import {toggleSessionForm} from '../../actions/modal_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginGuest: () => dispatch(login({user: {username: "GUEST", password: "password"}})),
  toggleSessionForm: (formType) => dispatch(toggleSessionForm(formType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
