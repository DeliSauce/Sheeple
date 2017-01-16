import React from 'react';
import Modal from 'react-modal';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };

    // date: props.filters.date


  }

  handleSubmit(){

  }

  // closeModal() {
  //   return () => this.setState({modalIsOpen: false});
  // }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>Booking Form</div>


          <div>
            {"Warm Body: " + this.props.tasker.first_name + " " + this.props.tasker.last_name}
          </div>

          <div>
            {"Location: "+ this.props.tasker.location}
          </div>

          <div>
            {"Rate: $" + this.props.tasker.rate + "/hr"}
          </div>

          <label> Task Date:
            <textarea value={this.state.description} onChange={this.update('description')} />
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
