import React from 'react';
import HeaderNavContainer from './header_nav/header_nav_container';

const App = ({ children }) => (
  <div className="top-level-change-this">

    <div className="header">
      <div className="logo">LOGO</div>
      <HeaderNavContainer />
    </div>

    <div className="homepage">

      <div className="splash">
        <div className="splash-tagline">
          When All You Need Is A Crowd
          <br/> To Create Some Buzz
        </div>
      </div>

      <div className="task-selectors">

        <div className="task-selector-line">
          Line Standers 
          <button>BOOK</button>
        </div>

        <div className="task-selector-seat">
          Seat Fillers
          <button>BOOK</button>
        </div>

        <div className="task-selector-concert">
          Concert Goers
          <button>BOOK</button>
        </div>

      </div>

    </div>
    { children }
  </div>
);

export default App;
