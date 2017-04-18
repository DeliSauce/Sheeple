import { connect } from 'react-redux';
import { logout, login} from '../../actions/session_actions';
import {toggleSessionForm} from '../../actions/modal_actions';
import {clearTasks} from '../../actions/task_actions';
import {updateFilter} from '../../actions/filter_actions';

import HeaderNav from './header_nav';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(clearTasks());
    dispatch(updateFilter('clear'));
    dispatch(logout());
  },
  loginGuest: () => dispatch(login({user: {username: "GUEST", password: "password"}})),
  toggleSessionForm: (formType) => dispatch(toggleSessionForm(formType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
