import React from 'react';
import HeaderNavContainer from './header_nav/header_nav_container';

const App = ({ children }) => (
  <div>
    <div className="header">
      <div className="logo">LOGO</div>
      <HeaderNavContainer />
    </div>
    <div className="homepage">
      <div className="splash">

      </div>
      <div className="task-selectors">
        <div className="task-selector">
          Line Standers
          <button>BOOK</button>
        </div>
        <div className="task-selector">
          Seat Fillers
          <button>BOOK</button>
        </div>
        <div className="task-selector">
          ............
          <button>BOOK</button>
        </div>
      </div>
    </div>
    { children }
  </div>
);

export default App;
