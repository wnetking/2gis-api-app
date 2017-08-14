import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

class Logout extends Component {
  componentDidMount() {
    let {dispatch} = this.props;
    dispatch.updateDataAction({
      login: false,
      user: {
        name: 'Anonim',
        email: 'anonim@anonim.com'
      },
      message: {
        type: 'info',
        show: false,
        text: 'Test message'
      }
    })
    localStorage.removeItem('user')
    localStorage.removeItem('email')
  }

  render() {
    return (
      <div>
        <Redirect to='/'/>
      </div>
    )
  }
}

export default Logout;
