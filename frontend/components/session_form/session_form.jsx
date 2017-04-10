import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import modalStyle from './modal_style';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
        username: "",
        password: "",
        email: ""
    };

    this.state = this.defaultState;
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
    if (this.formType() === 'login') {
      this.props.processLoginForm(user);
    } else {
      this.props.processSignupForm(user);
    }
  }

  formType(){
    if (this.props.loginModalStatus) {
      return 'login';
    } else if (this.props.signupModalStatus) {
      return 'signup';
    } else {
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

  closeModal() {
    this.setState(this.defaultState);
    this.props.clearErrors();
    this.props.toggleSessionForm(this.formType());
  }

  switchFormLink() {
    if (this.formType() === 'signup') {
      return (
        <p>
          Already have an account? <a onClick={this.switchForms.bind(this)}>Log in</a>
          .
        </p>
      );
    } else {
      return (
        <p>
          Dont have an account? <a onClick={this.switchForms.bind(this)}>Sign up</a>
          .
        </p>
      );
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  renderErrors() {
    this.props.errors.forEach((error) => console.log(error));
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

  renderUsernameError() {
    if (this.props.errors.some((error) => (error === 'Username can\'t be blank'))) {
      return (
        <div className='form-error'>
          Username cant be blank
        </div>
      );
    } else {
      return (
        <div className='form-error'></div>
      );
    }
  }

  renderPasswordError() {
    if (this.props.errors.some((error) => (error === 'Password is too short (minimum is 6 characters)'))) {
      return (
        <div className='form-error'>
          Password must be at least 6 characters
        </div>
      );
    } else {
      return (
        <div className='form-error'></div>
      );
    }
  }

  renderEmailError(){
    if (this.props.errors.some((error) => (error === 'Email can\'t be blank'))) {
      return (
        <div className='form-error'>
          Email cant be blank
        </div>
      );
    } else {
      return (
        <div className='form-error'></div>
      );
    }
  }

  renderLoginError() {
    if (this.props.errors.some((error) => (error === 'Invalid username/password combination'))) {
      return (
        <div className='form-error'>
          Invalid username/password combination
        </div>
      );
    } else {
      return (
        <div className='form-error'></div>
      );
    }
  }

  buttonText() {
    if (this.formType() === 'login') {
      return "LOGIN";
    } else {
      return "SIGN UP";
    }
  }

  render (){
    return (
      <Modal
        isOpen={this.props.loginModalStatus || this.props.signupModalStatus}
        onRequestClose={this.closeModal.bind(this)}
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
            {this.renderUsernameError()}

            <label> Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
            {this.renderPasswordError()}

            {this.email()}
            {this.renderEmailError()}
            {this.renderLoginError()}
          </div>
          <div>
            <input type="submit" className="form-submit-button button" value={this.buttonText()}/>
              <button className="guest-login-button" onClick={this.props.loginGuest.bind(this)}>Guest Log In</button>
          </div>
          {this.switchFormLink()}


        </form>
      </Modal>
    );
  }
}

export default withRouter(SessionForm);
