import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Footer from "./FooterComponent";
import "./Team.css";

export default class Team extends Component {
  render() {
    return (
      <div className="Team">
        <div className="lander">
          <h1>Meet The Team</h1>
          <p>Our team currently consists of three mechanical engineers, 1 computer engineer. and 3 computer scientists</p>
        </div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src= {require('../images/eric.png')} thumbnail />
              <h1>Eric Becerril</h1>
              <p>He mostly sleeps. Sometimes he codes</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require('../images/brandon.png')} thumbnail />
              <h1>Brandon Herrera</h1>
              <p>They call him... EL TIGRE CHINO</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require('../images/esdras.jpg')} thumbnail />
              <h1>Esdras Morales</h1>
              <p>Esdras? More like es stress. Jk dont hurt me</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src= {require('../images/ameera.png')} thumbnail />
              <h1>Ameera Essaqi</h1>
              <p>She owes me a beer</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require('../images/zoyla.png')} thumbnail />
              <h1>Zoyla Orellana</h1>
              <p>Still looking for her debit card</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src= {require('../images/gio.png')} thumbnail />
              <h1>Giovanny Vazquez</h1>
              <p>The type of guy who farts in the toilet and then flushes it</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src= {require('../images/mikian.png')} thumbnail />
              <h1>Mikian</h1>
              <p>Neural Net Master</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require('../images/mystery.png')} thumbnail />
              <h1>???</h1>
              <p>???</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src= {require('../images/mystery.png')} thumbnail />
              <h1>???</h1>
              <p>???</p>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}
