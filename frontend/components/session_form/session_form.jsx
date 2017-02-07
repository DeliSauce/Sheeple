import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        email: ""
    };
    // window.loggedin = props.loggedin;
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

  header() {
    if (this.props.formType === 'login') {
      return (<div className="form-header-login">Log In To Sheeple</div>);
    } else {
      return (<div className="form-header-signup">Sign Up For A New Account</div>);
    }
  }


  email() {
    if (this.props.formType === 'signup') {
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

  // switchforms() {
  //   if (this.props.formType === 'signup') {
  //     return (
  //       <Link to="/login"> Already have an account? Log in. </Link>
  //     );
  //   } else {
  //     return (
  //       <Link to="/signup"> Dont have an account? Sign up. </Link>
  //     );
  //   }
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


  buttonText() {
    if (this.props.formType === 'login') {
      return "LOGIN";
    } else {
      return "SIGN UP";
    }
  }

  render (){
    return (

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

          {this.renderErrors()}

        </form>
    );
  }

}

export default withRouter(SessionForm);

//
// import React from 'react';
// import { Link, withRouter } from 'react-router';
//
// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         username: "",
//         password: "",
//         email: ""
//     };
//     // window.loggedin = props.loggedin;
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentDidUpdate() {
// 		this.redirectIfLoggedIn();
// 	}
//
//   //TODO redo this function with hashHistory.?
//   redirectIfLoggedIn() {
//     if (this.props.loggedIn) {
//       this.props.router.push("/");
//     }
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     // const user = Object.assign({}, this.state);
//     const user = {user: this.state};
//     this.setState({
//         username: "",
//         password: "",
//         email: ""
//     });
//     this.props.processForm(user);
//     // .then(() => this.redirect());
//   }
//
//   header() {
//     if (this.props.formType === 'login') {
//       return (<h1> Log In </h1>);
//     } else {
//       return (<h1> Sign Up </h1>);
//     }
//   }
//
//
//   email() {
//     if (this.props.formType === 'signup') {
//       return (
//         <label> Email:
//           <input
//             type="text"
//             value={this.state.email}
//             onChange={this.update('email')}
//           />
//         </label>
//       );
//     }
//   }
//
//   switchforms() {
//     if (this.props.formType === 'signup') {
//       return (
//         <Link to="/login"> Already have an account? Log in. </Link>
//       );
//     } else {
//       return (
//         <Link to="/signup"> Dont have an account? Sign up. </Link>
//       );
//     }
//   }
//
//   update(field) {
//     return (e) => {
//       console.log('hit entry field', e.target.value);
//       this.setState({[field]: e.currentTarget.value});
//     };
//   }
//
//   renderErrors() {
//     return(
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }
//
//   render (){
//     return (
//
//         <form onSubmit={this.handleSubmit} className="session-form">
//           {this.header()}
//           {this.renderErrors()}
//           <label> Username:
//             <input
//               type="text"
//               value={this.state.username}
//               onChange={this.update('username')}
//             />
//           </label>
//
//           <label> Password:
//             <input
//               type="text"
//               value={this.state.password}
//               onChange={this.update('password')}
//             />
//           </label>
//
//
//           {this.email()}
//
//           <input type="submit" />
//
//           {this.switchforms()}
//
//         </form>
//     );
//   }
//
// }
//
// export default withRouter(SessionForm);
