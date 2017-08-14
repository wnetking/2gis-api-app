import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {Link, Redirect} from 'react-router-dom';
import {Jumbotron, ControlLabel, Form, FormGroup, Col, FormControl, Button, Checkbox} from 'react-bootstrap'
import '../styles/App.less';

const responseGoogle = (response) => {
  console.log(response);
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let d = document;
    let {dispatch, auth} = this.props;

    const data = {
      'email': d.getElementById('formHorizontalEmail').value,
      'password': d.getElementById('formHorizontalPassword').value
    }

    fetch('/user/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(item => {
        dispatch.updateDataAction(item)

        if (item.login) {
          localStorage.setItem('user', item.user.name)
          localStorage.setItem('email', item.user.email)
        }
      });
  }


  render() {
    let {auth} = this.props;

    if (auth.login) {
      return (
        <Redirect to='/'/>
      )
    }
    return (
      <Jumbotron>
        <h1>Login</h1>
        <hr />
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" name="email" required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" name="password" required/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Link to='/registration'>Registration</Link>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
              &nbsp;&nbsp;
              <GoogleLogin clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" className='btn btn-md btn-default' buttonText="Google Login" onSuccess={responseGoogle} onFailure={responseGoogle}/>
            </Col>
          </FormGroup>
        </Form>
      </Jumbotron>
    );
  }
}

export default Login;
