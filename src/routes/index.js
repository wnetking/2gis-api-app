import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap'

import { Main, Login, About } from '../containers'
import { Menu } from '../components'
import * as mapActions from '../actions/mapAction'

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    let { map, auth, mapActions } = this.props;

    return (
      <Router>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <Menu />
            </Col>
            <Col xs={12}>
              <Route exact path="/" render={() => <Main data={map} dispatch={mapActions}/>} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/about" render={() => <About />} />
            </Col>
          </Row>
        </Grid>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    map: state.map,
    auth: state.auth
  }
}
function mapDispatchToProps(dispatch) {
  return {
    mapActions: bindActionCreators(mapActions, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Routes);