import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap'

import { Main, Login, About, Registration } from './index'
import { Menu, Info, Logout } from '../components'
import * as mapActions from '../actions/mapAction'
import * as userActions from '../actions/userAction'

class App extends Component {
  render() {
    let { mapState, userState, mapActions, userActions } = this.props;

    return (
      <Router>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <Menu dispatch={mapActions} />
            </Col>
            <Col xs={12}>
              <Route exact path="/" render={() => (
                <Main
                  mapState={mapState}
                  mapActions={mapActions} />
              )} />


              <Route path="/login" render={() => <Login userState={userState} userActions={userActions} />} />
              <Route path="/about" render={() => <About />} />
              {/* <Route path="/logout" render={() => <Logout />} /> */}
            </Col>
          </Row>
        </Grid>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    mapState: state.map,
    userState: state.user
  }
}
function mapDispatchToProps(dispatch) {
  return {
    mapActions: bindActionCreators(mapActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);