import React from 'react';
import { Link } from 'react-router';

const loggedOutNav = (loginGuest) => (
  <nav className="logged-out-nav">
    <button className="guest-login-button" onClick={loginGuest}>Guest Log In</button>
    <Link to="/login" activeClassName="current">Log In</Link>
    <Link to="/signup" activeClassName="current">Sign up</Link>
  </nav>
);

const loggedInNav = (currentUser, logout) => (
	<hgroup className="logged-in-nav">
    <div className="header-name">{currentUser.username}</div>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const HeaderNav = ({ currentUser, logout, loginGuest}) => (
  currentUser ? loggedInNav(currentUser, logout) : loggedOutNav(loginGuest)
);

export default HeaderNav;
