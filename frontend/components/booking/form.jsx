import React from 'react';
import Modal from 'react-modal';
import bookingModalStyle from '../../../app/assets/stylesheets/modals/booking_modal_style';
import { SingleDatePicker } from 'react-dates';
import merge from 'lodash/merge';
import Moment from 'moment';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      location: "",
      tasker_id: "",
      description: "",
      date: null,
      status: ""
    };

    this.state = this.defaultState;

    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  afterOpenModal () {
    console.log('onAfterOpen');
    let date = null;
    if (this.props.filters.date) {
      date = new Moment(this.props.filters.date);
    }
    let status = this.props.tasker.auto_book ? 'booked' : 'pending';
    this.setState({
      date,
      status,
      location: this.props.tasker.location,
      tasker_id: this.props.tasker.id,
    });
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.clearBookingErrors();
    let date = this.state.date ? this.state.date.format("YYYY-MM-DD") : '';
    let task = merge({}, this.state, {date});
    this.props.submitBooking({task}, this.closeModal);
  }

  closeModal() {
    this.setState(this.defaultState);
    this.props.clearBookingErrors();
    this.props.toggleBookingForm();
  }

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

  renderForm() {
    if (this.props.tasker) {
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
    } else {
      // Before the form modal is opened, 'tasker' is null so we must
      // include this empty return statement so that we don't get any
      // errors.
      return;
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.bookingModalStatus}
        onRequestClose={this.closeModal}
        onAfterOpen={this.afterOpenModal}
        contentLabel="Modal"
        style={bookingModalStyle}
      >
        {this.renderForm()}
      </Modal>
    );
  }

}

export default Form;
