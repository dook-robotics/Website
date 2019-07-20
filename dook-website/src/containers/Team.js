import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./Team.css";

export default class Team extends Component {
  render() {
    return (
      <div className="Team">
        <div className="lander">
          <h1>Da Team</h1>
        </div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src= "src/images/eric.png" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="holder.js/171x180" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="holder.js/171x180" thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
