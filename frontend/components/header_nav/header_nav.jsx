import React from 'react';
import { Link, hashHistory, withRouter} from 'react-router';

const loggedOutNav = (loginGuest) => (
  <nav className="logged-out-nav">
    <button className="guest-login-button" onClick={loginGuest}>Guest Log In</button>
    <Link to="/login" activeClassName="current">Log In</Link>
    <Link to="/signup" activeClassName="current">Sign up</Link>
  </nav>
);

const gotoPage = (page) => () => {
  if (page === 'DASHBOARD') {
    hashHistory.push(`/dashboard`);
  } else {
    hashHistory.push(`/booking`);
  }
};

const logoutAndRedirect = (logout) => () => {
  logout();
  hashHistory.push(`/`);
};

const loggedInNav = (currentUser, logout) => {
  let navButton = "";
  if (location.hash === '#/dashboard') {
    navButton = 'BOOKING';
  } else {
    navButton = 'DASHBOARD';
  }

  return (
    <hgroup className="logged-in-nav">
      <div className="header-name">{currentUser.username}</div>
      <button className="dashboard-button" onClick={gotoPage(navButton)}> {navButton} </button>
      <button className="header-button" onClick={logoutAndRedirect(logout)}>Log Out</button>
    </hgroup>
  );
};


const HeaderNav = ({ currentUser, logout, loginGuest}) => (
  currentUser ? loggedInNav(currentUser, logout) : loggedOutNav(loginGuest)
);

export default withRouter(HeaderNav);
