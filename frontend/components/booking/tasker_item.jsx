import React from 'react';
import FormContainer from './form_container';
import Modal from 'react-modal';
import formModalStyle from './form_modal_style';






class TaskerItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  bookingButtonToggle(bool){
    if (bool) {
      return (
        <button onClick={this.openModal()} className="button instant-book">
          Instant Booking
        </button>
      );
    } else {
      return (
        <button onClick={this.openModal()} className="button normal-book">
          Request Booking
        </button>
      );
    }
  }

  openModal() {
    return () => this.setState({modalIsOpen: true});
  }

  closeModal() {
    return () => this.setState({modalIsOpen: false});
  }

 render (){

    return (
      <li className="search-result-item">

        <div className="profile-img">
          <img src={this.props.tasker.profile_img_link} />
        </div>

        <div className="profile-data">
          <div>
            {this.props.tasker.first_name + " " + this.props.tasker.last_name + " (" + this.props.tasker.location + ")"  }
          </div>
          <div>
            {"Rate: $" + this.props.tasker.rate + "/hr"}
          </div>
          <div>
            {"Skillset: " + this.props.tasker.skill}
          </div>
        </div>

        <div className="profile-description ellipsis">
          {this.props.tasker.description}
        </div>

        <div className="profile-buttons">
          <div>
            {this.bookingButtonToggle(this.props.tasker.auto_book)}
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal()}
          contentLabel="Modal"
          style={formModalStyle}>
          <button className="form-close" onClick={this.closeModal()}>X</button>
          <FormContainer tasker={this.props.tasker}/>
        </Modal>


      </li>
    );
  }
}

export default TaskerItem;
