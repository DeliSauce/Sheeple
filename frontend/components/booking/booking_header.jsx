import React from 'react';
import {connect} from 'react-redux';

class BookingHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  getHighlighting(field) {
    // switch(field) {
    //   case 'location':
    //     return ((this.props.location) ? "highlighted" : "");
    //   case 'task':
    //     return ((this.props.task) ? "highlighted" : "");
    //   case 'date':
    //     return ((this.props.date) ? "highlighted" : "");
    // }
  }

  render() {
    return (
      <div className="booking-header">
        <div className="booking-heading">
          <div className="booking-heading-number">
            1
          </div>
          <div className="booking-heading-text">
            Narrow Your Search
          </div>
        </div>
        <div className="booking-heading">
          <div className="booking-heading-number">
            2
          </div>
          <div className="booking-heading-text">
            Choose a Sheeple
          </div>
        </div>
        <div className="booking-heading">
          <div className="booking-heading-number">
            3
          </div>
          <div className="booking-heading-text">
            Fill Out Booking Form
          </div>
        </div>
      </div>

    );
  }

}

const mapStateToProps = (state) => ({
  date: state.filters.date,
  task: state.filters.skill,
  location: state.filters.location
});


export default connect(mapStateToProps)(BookingHeader);
