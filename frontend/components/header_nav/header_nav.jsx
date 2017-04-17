import React from 'react';
import { Link, hashHistory, withRouter} from 'react-router';

import SessionFormContainer from '../session_form/session_form_container';


class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  gotoPage(page) {
    return () => {
      if (page === 'Dashboard') {
        hashHistory.push(`/dashboard`);
      } else {
        hashHistory.push(`/booking`);
      }
    };
  }

  logoutAndRedirect(logout) {
    return () => {
      logout();
      hashHistory.push(`/`);
    };
  }

  loggedInNav(currentUser, logout) {
    let navButton = "";
    if (location.hash === '#/dashboard') {
      navButton = 'Booking';
    } else {
      navButton = 'Dashboard';
    }

    return (
      <hgroup className="logged-in-nav">
        <div className="header-nav-user">
          <div className="avatar-image"></div>
          <div>{this.props.currentUser.username}</div>
        </div>
        <button className="nav-button" onClick={this.gotoPage(navButton)}> {navButton} </button>
        <button className="nav-button" onClick={this.logoutAndRedirect(logout)}>Log Out</button>
      </hgroup>
    );
  }

  openModal(formType) {
    return () => {
      this.props.toggleSessionForm(formType);
    };
  }

  loggedOutNav() {
    return (
      <nav className="logged-out-nav">

        <button className="guest-login-button" onClick={this.props.loginGuest.bind(this)}>Guest Log In</button>
        <button className="nav-button" onClick={this.openModal('login')}>Log In</button>
        <button className="nav-button" onClick={this.openModal('signup')}>Sign Up</button>

        <SessionFormContainer />
      </nav>
    );
  }

  render () {
    return (
      this.props.currentUser ? this.loggedInNav(this.props.currentUser, this.props.logout) : this.loggedOutNav()
    );
  }
}

export default withRouter(HeaderNav);
