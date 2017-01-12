import React from 'react';
import HeaderNavContainer from './header_nav/header_nav_container';

const App = ({ children }) => (
  <div className="top-level-change-this">

    <div className="header">
      <div className="hero-image"></div>
      <HeaderNavContainer />
    </div>

    { children }
  </div>
);

export default App;
