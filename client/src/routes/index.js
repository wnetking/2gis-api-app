import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Grid, Row, Col} from 'react-bootstrap'

import {Main, Login, About, Registration} from '../containers'
import {Menu, Info, Logout} from '../components'
import * as mapActions from '../actions/mapAction'
import * as authActions from '../actions/authAction'

class Routes extends Component {
  render() {
    let {map, auth, mapActions, authActions} = this.props;

    return (
      <Router>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <Menu auth={auth} dispatch={mapActions}/>
            </Col>
            <Col xs={12}>
              {auth.message.show ?
                <Info auth={auth}/>
                : ''
              }
              <Route exact path="/" render={() => <Main data={map} auth={auth} authActions={authActions} dispatch={mapActions}/>}/>
              <Route path="/login" render={() => <Login auth={auth} dispatch={authActions}/>}/>
              <Route path="/about" render={() => <About />}/>
              <Route path="/logout" render={() => <Logout auth={auth} dispatch={authActions} />}/>
              <Route path="/registration" render={() => <Registration data={map} auth={auth} dispatch={authActions}/>}/>
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
    mapActions: bindActionCreators(mapActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Routes);