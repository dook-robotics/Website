import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Footer from "./FooterComponent";
import Fade from 'react-reveal/Fade';
import "./Features.css";

export default class Features extends Component {
  render() {
    return (
      <div className="Features">
        <div className="lander">
          <h1>Features</h1>
          <Fade top>
            <p>Learn all about the technical components of Dook here</p>
            <Image src= {require('../images/demo.jpg')} fluid />
          </Fade>
          <div className = "background">
            <h5>Backgroud</h5>
            <p>{"    "}The motivation for Dook comes from the commercial hit from iRobot – the Roomba. The Roomba is a small, circular vacuum that navigates through the interior of a home with the help of ultrasonic sensors to clean the floors. There are variations of this robot that include mopping features and even a dedicated pool cleaner, but none exist for the exterior of homes. With the introduction of Dook, this team will open the possibility of these smart domestic robots to the outdoors.</p>
          </div>
          <div className = "Market">
            {" "}
            <h5>Market</h5>
            <p>{"    "}Conducting a survey on UNLV students we found the following:</p>
            <Image bsPrefix = "img" src= {require('../images/market.png')} fluid />
            <p>{"                  "}</p>
            <p>{"                  "}</p>

          </div>
          {" "}
          <div className = "Method">
            <h5>Methodology For Control</h5>
            <Image bsPrefix = "img" src= {require('../images/method.png')} fluid />
            <p>{"                  "}</p>
            <p>{"                  "}</p>
          </div>
          <div className = "Hardware">
            <h5>Hardware</h5>
            <Image bsPrefix = "img" src= {require('../images/method.png')} fluid />
            <p>{"                  "}</p>
            <p>{"                  "}</p>
          </div>

          <div className = "Cols">
            <Container>
              <Row>
                <Col>
                  <Image bsPrefix = "img" src= {require('../images/software.png')} fluid />
                </Col>
                <Col>
                  <Image bsPrefix = "img" src= {require('../images/specs.png')} fluid />
                </Col>
              </Row>
            </Container>
          </div>


        </div>
        <Footer/>
      </div>
    );
  }
}
