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
          Instant<br/>Booking
        </button>
      );
    } else {
      return (
        <button onClick={this.openModal()} className="button normal-book">
          Request<br/>Booking
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

  // renderProfilePic(){
  //   var list = document.getElementsByClassName('thumb');
  //
  //   for (var i = 0; i < list.length; i++) {
  //     var src = list[i].getAttribute('data-image-src');
  //     list[i].style.backgroundImage="url('" + src + "')";
  //   }
  //
  //   return ()
  // }

 render (){

    return (
      <li className="search-result-item">


        <img className="profile-img" src={"http://res.cloudinary.com/delisauce/image/upload/c_crop,h_1100,w_1000/v1484780832/Profile/" + this.props.tasker.profile_img_link} />


        <div className="profile-data">
          <div>
            {this.props.tasker.first_name + " " + this.props.tasker.last_name + " (" + this.props.tasker.location + ")"  }
          </div>
          <div>
            {"Rate: $" + this.props.tasker.rate + "/hr"}
          </div>
          <div className="tasker-item-skill">
            {this.props.tasker.skill}
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

          <FormContainer tasker={this.props.tasker} closeModal={this.closeModal}/>

        </Modal>


      </li>
    );
  }
}

export default TaskerItem;
