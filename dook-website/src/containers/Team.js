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
          <p>We are a large team, consisting of three mechanical engineers, four computer scientists, and one computer engineer. Get to know us!</p>
        </div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src= {require('../images/eric.png')} thumbnail />
              <h1>Eric Becerril-Blas</h1>
              <p>Computer Scientist</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require('../images/brandon.png')} thumbnail />
              <h1>Brandon Herrera</h1>
              <p>Mechanical Engineer</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require('../images/esdras.png')} thumbnail />
              <h1>Esdras Morales</h1>
              <p>Mechanical Engineer</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src= {require('../images/ameera.png')} thumbnail />
              <h1>Ameera Essaqi</h1>
              <p>Computer Engineer</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require('../images/zoyla.png')} thumbnail />
              <h1>Zoyla Orellana</h1>
              <p>Computer Scientist</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src= {require('../images/gio.png')} thumbnail />
              <h1>Giovanny Vazquez</h1>
              <p>Mechanical Engineer</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src= {require('../images/mikian.png')} thumbnail />
              <h1>Mikian Musser</h1>
              <p>Computer Scientist</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require('../images/austin.png')} thumbnail />
              <h1>Austin Janushan</h1>
              <p>Computer Scientist</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src= {require('../images/team.png')} thumbnail />
              <h1>Dook Robotics</h1>
              <p>First Place Interdiscplinary Team</p>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}
