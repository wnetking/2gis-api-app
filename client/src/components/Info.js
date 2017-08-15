import React, { Component } from 'react';
import { Alert } from 'react-bootstrap'

class Info extends Component {
  componentDidMount() {
    let { dispatch, auth } = this.props
    setTimeout(() => {
      if (auth.message.show) {
        dispatch.updateDataAction({
          message: {
            show: false
          }
        })
      }
    }, 5000)
  }
  render() {
    let { auth } = this.props;

    return (
      <Alert bsStyle={auth.message.type}>
        <p>{auth.message.text}</p>
      </Alert>
    )
  }
}

export default Info;