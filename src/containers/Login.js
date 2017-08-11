import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {Jumbotron} from 'react-bootstrap'
import '../styles/App.less';

const responseGoogle = (response) => {
  console.log(response);
}

class Login extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Login</h1>
        <p>Please use you google acount for login. Thank you =)</p>
        <p>
          <GoogleLogin clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            className='btn btn-md btn-default'
            buttonText="Google Login"
            onSuccess={responseGoogle} onFailure={responseGoogle}/>
        </p>
      </Jumbotron>
    );
  }
}

export default Login;
