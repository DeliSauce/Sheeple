import React from 'react';
import HeaderNavContainer from './header_nav/header_nav_container';
import {hashHistory} from 'react-router';


const gotoHomePage = () => {
  hashHistory.push('/');
};

const App = ({ children }) => (
  <div className="top-level-change-this">

    <div className="header">
      <button className="hero-image" onClick={gotoHomePage}> </button>
      <HeaderNavContainer />
    </div>
    <div className="body">
      { children }
    </div>
  </div>
);

export default App;
