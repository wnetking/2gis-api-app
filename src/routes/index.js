import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Main, Login, About } from '../containers'

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">About</Link></li>
            <li><Link to="/about">Topics</Link></li>
          </ul>
          <Route exact path="/" render={() => <Main />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/about" render={() => <About />} />
        </div>
      </Router>
    )
  }
}


export default Routes;