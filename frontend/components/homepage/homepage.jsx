import React from 'react';
import {hashHistory} from 'react-router';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    // this.gotoBooking = this.gotoBooking.bind(this);
  }

  gotoBooking(type) {
    return () => {
      if (this.props.currentUser) {
        this.props.updateFilter('skill', type);
        hashHistory.push(`/booking`);
      } else {
        this.props.toggleSessionForm('signup');
      }
    };
  }

  render() {
    return (
      <div className="homepage">

        <div className="splash splash-background">
          <div className="splash-tagline">
            When All You Need Is A Crowd
            <br/> To Create Some Buzz
          </div>
        </div>

        <div className="task-selectors-container">

          <div className="task-selector-box">
            <div className="task-selector-img line-background"></div>
            <div className="task-selector-details">
              <div className="task-selector-text">
                <h3> Line'em Up & Knock'em Down </h3>
                The longer you make people wait outside your club, the cooler it is. Bonus Points if it's raining.
              </div>
              <button onClick={this.gotoBooking('standing')}  className="book-button">BOOK Line Standers</button>
            </div>
          </div>


          <div className="task-selector-box">
            <div className="task-selector-img seat-background"></div>
            <div className="task-selector-details">
              <div className="task-selector-text">
                <h3> Pavlov Who? </h3>
                Ever peek in an empty restaurant and just keep walking...
              </div>
              <button onClick={this.gotoBooking('sitting')} className="book-button">BOOK Seat Fillers</button>
            </div>
          </div>


          <div className="task-selector-box">
            <div className="task-selector-img concert-background"></div>
            <div className="task-selector-details">
              <div className="task-selector-text">
                <h3> Pump Up Your Base </h3>
                Concerts are more fun when there are people cheering. BAAAAAA!! Sheeple!!
              </div>
              <button onClick={this.gotoBooking('moving')} className="book-button">BOOK Concert Goers</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Homepage;
