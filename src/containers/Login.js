import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import logo from '../img/logo.svg';
import '../styles/App.less';

const responseGoogle = (response) => {
  console.log(response);
}

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Login</h2>
        </div>
        <p className="App-intro">
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />,
        </p>
      </div>
    );
  }
}

export default Login;
