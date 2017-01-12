import React from 'react';
import HeaderNavContainer from './header_nav/header_nav_container';

const App = ({ children }) => (
  <div className="top-level-change-this">

    <div className="header">
      <div className="hero-image"></div>
      <HeaderNavContainer />
    </div>

    <div className="homepage">

      <div className="splash">
        <div className="splash-tagline">
          When All You Need Is A Crowd
          <br/> To Create Some Buzz
        </div>
      </div>

      <div className="task-selectors-container">

        <div className="task-selector line-background">
          <div className="task-selector-text">Line Standers</div>
          <button className="book-button">BOOK</button>
        </div>

        <div className="task-selector seat-background">
          <div className="task-selector-text">Seat Fillers</div>
          <button className="book-button">BOOK</button>
        </div>

        <div className="task-selector concert-background">
          <div className="task-selector-text">Concert Goers</div>
          <button className="book-button">BOOK</button>
        </div>

      </div>

    </div>
    { children }
  </div>
);

export default App;
