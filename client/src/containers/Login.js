import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Jumbotron, Image, Media } from 'react-bootstrap'
import { GOOGLE_AUTH_KEY } from '../constants/'
import '../styles/App.less';

class Login extends Component {
  handleSubmit = (data) => {
    this.props.userActions.logInAction(data.profileObj);
  }

  render() {
    let { userState } = this.props

    return (
      <Jumbotron>
        {userState.isLogin ?
          <Media>
            <Media.Left>
              <Image src={userState.userInfo.imageUrl} circle />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{userState.userInfo.name}</Media.Heading>
              <p>{userState.userInfo.email}</p>
            </Media.Body>
          </Media>
          :
          <div>
            <h1>Login</h1>
            <hr />
            <GoogleLogin
              clientId={GOOGLE_AUTH_KEY}
              buttonText="Login"
              onSuccess={this.handleSubmit}
              onFailure={this.handleSubmit}
            />
          </div>
        }
      </Jumbotron>

    );
  }
}

export default Login;
