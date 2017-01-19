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
        <div className={this.getHighlighting('location')}>
          1. Narrow Your Search
        </div>
        <div className={this.getHighlighting('task')}>
          2. Choose a Warm Body
        </div>
        <div className={this.getHighlighting('date')}>
          3. Fill Out Booking Form
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
