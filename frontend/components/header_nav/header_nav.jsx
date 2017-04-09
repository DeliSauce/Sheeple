import React from 'react';
import { Link, hashHistory, withRouter} from 'react-router';

import SessionFormContainer from '../session_form/session_form_container';


class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {formType: ""};
    // this.state = {formType: "", modalIsOpen: false};
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
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
    console.log("current user: ", currentUser);
    console.log("props: ", this.props.currentUser);

    return (
      <hgroup className="logged-in-nav">
        <div className="header-user-container">
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
      console.log('openModal method');
    };
  }

  loggedOutNav(loginGuest) {
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
      this.props.currentUser ? this.loggedInNav(this.props.currentUser, this.props.logout) : this.loggedOutNav(this.props.loginGuest)
    );
  }
}

export default withRouter(HeaderNav);
