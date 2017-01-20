import React from 'react';
import Modal from 'react-modal';
import { SingleDatePicker } from 'react-dates';
import merge from 'lodash/merge';
import Moment from 'moment';

class Form extends React.Component {
  constructor(props) {
    super(props);
    let status = props.tasker.auto_book ? 'booked' : 'pending';
    let date = null;
    if (props.filters.date) {
      date = new Moment(props.filters.date);
    }
    console.log(props.filters.date, date);
    this.state = {
      tasker_id: props.tasker.id,
      description: "",
      date,
      location: props.tasker.location,
      status: status

    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  handleSubmit(e){
    e.preventDefault();
    // let task = {task: this.state};
    let date = "";
    if (this.state.date) {
      date = this.state.date.format("YYYY-MM-DD");
    }
    let task = merge({}, this.state, {date});

    this.props.submitBooking({task}, this.props.closeModal());
  }

  // closeModal() {
  //   return () => this.setState({modalIsOpen: false});
  // }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  renderErrors() {
    return(
      <ul className="form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="form-error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  formSubmitType() {
    if (this.props.tasker.auto_book) {
      return "Confirm Booking";
    } else {
      return "Send Booking Confirmation";
    }
  }

  render() {
    return (
      <form className="form booking-form" onSubmit={this.handleSubmit}>


        <div className="form-header-booking">Booking Form</div>


        <div className="form-inputs-booking">
          <div>
            {"Who: " + this.props.tasker.first_name + " " + this.props.tasker.last_name}
          </div>

          <div>
            {"Where: "+ this.state.location}
          </div>

          <div>
            {"Rate: $" + this.props.tasker.rate + "/hr"}
          </div>

          <label> When:
            <SingleDatePicker
              id="date_input"
              date={this.state.date}
              focused={this.state.focused}
              numberOfMonths={1}
              onDateChange={this.onDateChange}
              onFocusChange={this.onFocusChange}
              />


          </label>

          <label> Description:
            <textarea value={this.state.description} onChange={this.update('description')} />
          </label>
        </div>

        <input type="submit" className="booking-submit-button button" value={this.formSubmitType()}/>

        {this.renderErrors()}

      </form>
    );
  }

}

export default Form;
