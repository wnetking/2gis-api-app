import React, {Component} from 'react';
import {Alert} from 'react-bootstrap'

class Info extends Component {
  render() {
    let {auth} = this.props;

    return (
      <Alert bsStyle={auth.message.type}>
        <p>{auth.message.text}</p>
      </Alert>
    )
  }
}

export default Info;