import React from 'react';
import Modal from 'react-modal';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasker_id: props.tasker.id,
      user_id: props.user_id,
      description: "",
      date: props.filters.date,
      location: props.tasker.location,
      status: 'pending'

    };
    this.handleSubmit = this.handleSubmit.bind(this);

    // date: props.filters.date


  }

  handleSubmit(e){
    e.preventDefault();
    const task = {task: this.state};
    this.props.submitBooking(task);
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>
        {this.renderErrors()}

        <div>Booking Form</div>

        <div>
          {"Warm Body: " + this.props.tasker.first_name + " " + this.props.tasker.last_name}
        </div>

        <div>
          {"Location: "+ this.state.location}
        </div>

        <div>
          {"Rate: $" + this.props.tasker.rate + "/hr"}
        </div>

        <label> Task Date:
          <input type="date" value={this.state.date} onChange={this.update('date')} />
        </label>

        <label> Task Description:
          <textarea value={this.state.description} onChange={this.update('description')} />
        </label>

        <input type="submit" />
      </form>
    );
  }

}

export default Form;
