import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Main, Login, About } from '../containers'
import { Menu } from '../components'

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Router>
          <div>
            <Menu />
            <Route exact path="/" render={() => <Main />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/about" render={() => <About />} />
          </div>
        </Router>
    )
  }
}


export default Routes;