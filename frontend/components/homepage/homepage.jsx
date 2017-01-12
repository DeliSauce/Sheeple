import React from 'react';
import {hashHistory} from 'react-router';

const gotoBooking = (type) => () => {
  hashHistory.push(`/booking`);
};

const Homepage = ({ children }) => (
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
          <button onClick={gotoBooking('line')}  className="book-button">BOOK</button>
        </div>

        <div className="task-selector seat-background">
          <div className="task-selector-text">Seat Fillers</div>
          <button onClick={gotoBooking('seat')} className="book-button">BOOK</button>
        </div>

        <div className="task-selector concert-background">
          <div className="task-selector-text">Concert Goers</div>
          <button onClick={gotoBooking('concert')} className="book-button">BOOK</button>
        </div>

      </div>
      {children}
    </div>
);

export default Homepage;
