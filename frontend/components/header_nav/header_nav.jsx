import React from 'react';
import { Link } from 'react-router';

const loggedOutNav = () => (
  <nav className="logged-out-nav">
    <Link to="/login" activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign up</Link>
  </nav>
);

const loggedInNav = (currentUser, logout) => (
	<hgroup className="logged-in-nav">
    <div className="header-name">{currentUser.username}</div>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const HeaderNav = ({ currentUser, logout }) => (
  currentUser ? loggedInNav(currentUser, logout) : loggedOutNav()
);

export default HeaderNav;
