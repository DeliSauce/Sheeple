import React from 'react';
import Modal from 'react-modal';


class Form extends React.Component {
  constructor(props) {
    super(props);
    let status = props.tasker.auto_book ? 'booked' : 'pending';
    this.state = {
      tasker_id: props.tasker.id,
      description: "",
      date: props.filters.date,
      location: props.tasker.location,
      status: status

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // user_id: props.user_id,
    // date: props.filters.date


  }

  handleSubmit(e){
    e.preventDefault();
    const task = {task: this.state};
    this.props.submitBooking(task, this.props.closeModal());
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
            <input type="date" value={this.state.date} onChange={this.update('date')} />
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
