import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Grid, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import {Main, Login, About} from '../containers'
import {Menu} from '../components'

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Grid>
          { this.props.user }
          <Row className="show-grid">
            <Col xs={12}>
              <Menu />
            </Col>
            <Col xs={12}>
              <Route exact path="/" render={() => <Main />}/>
              <Route path="/login" render={() => <Login />}/>
              <Route path="/about" render={() => <About />}/>
            </Col>
          </Row>
        </Grid>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    map: state.map,
    auth: state.auth
  }
}



export default connect(mapStateToProps)(Routes);