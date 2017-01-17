import React from 'react';
import {hashHistory} from 'react-router';


class Homepage extends React.Component {
  constructor(props){
    super(props);
    // this.gotoBooking = this.gotoBooking.bind(this);
  }

  gotoBooking(type) {
    return () => {
      console.log("button click");
      this.props.updateFilter('skill', type);
      hashHistory.push(`/booking`);
    };
  }

  render() {
    return (
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
              <button onClick={this.gotoBooking('standing')}  className="book-button">BOOK</button>
            </div>

            <div className="task-selector seat-background">
              <div className="task-selector-text">Seat Fillers</div>
              <button onClick={this.gotoBooking('sitting')} className="book-button">BOOK</button>
            </div>

            <div className="task-selector concert-background">
              <div className="task-selector-text">Concert Goers</div>
              <button onClick={this.gotoBooking('wandering')} className="book-button">BOOK</button>
            </div>

          </div>
      </div>
    );
  }
}

export default Homepage;

// export default Homepage;
// import React from 'react';
// import {hashHistory} from 'react-router';
//
// const gotoBooking = (type) => () => {
//   this.updateFilter(skill, type);
//   hashHistory.push(`/booking`);
// };
//
// const Homepage = ({ children }) => (
//     <div className="homepage">
//
//       <div className="splash">
//         <div className="splash-tagline">
//           When All You Need Is A Crowd
//           <br/> To Create Some Buzz
//         </div>
//       </div>
//
//       <div className="task-selectors-container">
//
//         <div className="task-selector line-background">
//           <div className="task-selector-text">Line Standers</div>
//           <button onClick={gotoBooking('standing')}  className="book-button">BOOK</button>
//         </div>
//
//         <div className="task-selector seat-background">
//           <div className="task-selector-text">Seat Fillers</div>
//           <button onClick={gotoBooking('sitting')} className="book-button">BOOK</button>
//         </div>
//
//         <div className="task-selector concert-background">
//           <div className="task-selector-text">Concert Goers</div>
//           <button onClick={gotoBooking('wandering')} className="book-button">BOOK</button>
//         </div>
//
//       </div>
//       {children}
//     </div>
// );
//
// export default Homepage;
