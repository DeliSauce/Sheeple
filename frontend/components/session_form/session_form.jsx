import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import modalStyle from './modal_style';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

  //TODO redo this function with hashHistory.?
  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {user: this.state};
    this.setState({
        username: "",
        password: "",
        email: ""
    });
    this.props.processForm(user);
  }

  formType(){
    if (this.props.loginModalStatus) {
      return 'login';
    } else if (this.props.signupModalStatus) {
      return 'signup';
    } else {
      console.log('Error: modal status not set');
      return 'error';
    }
  }

  header() {
    if (this.formType() === 'login') {
      return (<div className="form-header-login">Log In To Sheeple</div>);
    } else {
      return (<div className="form-header-signup">Sign Up For A New Account</div>);
    }
  }

  email() {
    if (this.formType() === 'signup') {
      return (
        <label> Email
          <input
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
          />
        </label>
      );
    }
  }

  switchForms () {
    let newForm = (this.formType() === 'signup' ? 'login' : 'signup');
    this.closeModal();
    this.props.toggleSessionForm(newForm);
  }

  switchFormLink() {
    if (this.formType() === 'signup') {
      return (
        <div>
          Already have an account?
          <a onClick={this.switchForms.bind(this)}> Log in. </a>
        </div>
      );
    } else {
      return (
        <div>
          Dont have an account?
          <a onClick={this.switchForms.bind(this)}> Sign up. </a>
        </div>
      );
    }
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

  buttonText() {
    if (this.formType() === 'login') {
      return "LOGIN";
    } else {
      return "SIGN UP";
    }
  }

  closeModal() {
    return () => {
      this.props.clearErrors();
      this.props.toggleSessionForm(this.formType());
    };
  }

  render (){
    return (
      <Modal
        isOpen={this.props.loginModalStatus || this.props.signupModalStatus}
        onRequestClose={this.closeModal()}
        contentLabel="Modal"
        style={modalStyle}
      >
        <form onSubmit={this.handleSubmit} className="form session-form">
          {this.header()}

          <div className="form-inputs">
            <label> Username
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                />
            </label>

            <label> Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
            {this.email()}
          </div>

          <input type="submit" className="form-submit-button button" value={this.buttonText()}/>
          {this.switchFormLink()}
          {this.renderErrors()}

        </form>
      </Modal>
    );
  }
}

export default withRouter(SessionForm);
