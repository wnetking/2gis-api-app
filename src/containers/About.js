import React, {Component} from 'react';
import author from '../img/author.jpg';
import {Jumbotron, Image, Row, Col, Label} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>About</h1>
        <p>In this page information about author.</p>
        <hr/>
        <Row>
          <Col xs={12} md={6}>
            <Image src={author} responsive/>
          </Col>
          <Col xs={12} md={6}>
            <h2>Kyrylov Illya</h2>
            <h6>Favorite technologies:</h6>
            <div>
              <Label bsStyle="default">HTML</Label>&nbsp;
              <Label bsStyle="primary">CSS</Label>&nbsp;
              <Label bsStyle="warning">JS</Label>&nbsp;
              <Label bsStyle="info">ReactJs</Label>
            </div>
            <h6>Hobbies:</h6>
            <div>
              <Label bsStyle="default">Technologies</Label>&nbsp;
              <Label bsStyle="default">Sport</Label>&nbsp;
              <Label bsStyle="default">Music</Label>&nbsp;
              <Label bsStyle="default">Books</Label>
            </div>

            <p className="mt-3">
              Hi! My name is Illya and I'm frontender.
            </p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default About;
