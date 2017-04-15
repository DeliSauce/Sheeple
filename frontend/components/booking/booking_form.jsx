import React from 'react';
import Modal from 'react-modal';
import bookingModalStyle from '../../../app/assets/stylesheets/modals/booking_modal_style';
import { SingleDatePicker } from 'react-dates';
import merge from 'lodash/merge';
import Moment from 'moment';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      location: "",
      tasker_id: "",
      description: "",
      date: null,
      status: "",
      dateError: false,
      descriptionError: false
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

  onDescriptionChange() {
    return (e) => {
      this.setState({description: e.currentTarget.value, descriptionError: false});
    };
  }

  onDateChange(date) {
    this.setState({ date, dateError: false});
  }

  componentWillReceiveProps(nextProps) {
    this.checkForErrors(nextProps);
  }

  checkForErrors(nextProps) {
    nextProps.errors.forEach(error => {
      console.log(error);
      if (error.toLowerCase().includes('date')) {
        this.setState({dateError: error});
      } else if (error.toLowerCase().includes('description')) {
        this.setState({descriptionError: error});
      }
    });
  }

  formSubmitType() {
    if (this.props.tasker.auto_book) {
      return "Confirm Booking";
    } else {
      return "Send Booking Confirmation";
    }
  }

  renderDateError() {
    if (this.state.dateError) {
      return (
        <div className='form-error'>
          {this.state.dateError}
        </div>
      );
    } else {
      return (
        <div className='form-error'></div>
      );
    }
  }

  renderDescriptionError() {
    if (this.state.descriptionError) {
      return (
        <div className='form-error'>
          {this.state.descriptionError}
        </div>
      );
    } else {
      return (
        <div className='form-error'></div>
      );
    }
  }

  renderForm() {
    if (this.props.tasker) {
      return (
        <form className="form booking-form" onSubmit={this.handleSubmit}>
          <div className="form-header-booking">Booking Form</div>
          <div className="form-body">
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
                <div className={this.setInputFieldClassName('date')}>
                  <SingleDatePicker
                    id="date_input"
                    date={this.state.date}
                    focused={this.state.focused}
                    numberOfMonths={1}
                    onDateChange={this.onDateChange}
                    onFocusChange={this.onFocusChange}
                  />
                </div>
              </label>
              {this.renderDateError()}

              <label> Description:
                <textarea
                  value={this.state.description}
                  onChange={this.onDescriptionChange()}
                  className={this.setInputFieldClassName('description')}
                  />
              </label>
              {this.renderDescriptionError()}
            </div>

            <input type="submit" className="booking-submit-button button" value={this.formSubmitType()}/>

          </div>
        </form>
      );
    } else {
      // Before the form modal is opened, 'tasker' is null so we must
      // include this empty return statement so that we don't get any
      // errors.
      return;
    }
  }

  setInputFieldClassName(field) {
    if ((this.state.descriptionError) && field === 'description') {
      return 'form-input-error';
    } else if ((this.state.dateError) && field === 'date') {
      return 'date-picker-border form-input-error';
    } else if (field === 'date'){
      return 'date-picker-border';
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

export default BookingForm;
