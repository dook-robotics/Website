import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Footer from "./FooterComponent";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form'
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./Home.css";



export default class Home extends Component {


  render() {
    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              About Us
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          The purpose behind Dook Robotics is to build a fully-autonomous, consumer-friendly, and affordable robot (named Dook)  that is capable of traversing the yards of homes.
Operationally, Dook will move randomly around the yard until it recognizes waste in the environment and then proceed toward the waste. Dook will then align itself until positioning the waste directly under its vacuum. It will then pick up the target and store it in a removable  waste bag. When Dook’s bin is full or battery power is low it will come to a complete stop and the user will be notified through the Dook app.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    function handleClick() {
        window.location.assign('https://github.com/dook-robotics');

    }

    function Contact() {
      const [modalShow, setModalShow] = React.useState(false);

      return (
        <div className = "row offset-5">
          <ButtonToolbar>
            <Button variant="outline-light" onClick={() => setModalShow(true)}>
              About Us
            </Button>{' '}
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />{' '}
            </ButtonToolbar>{' '}

            <div class = "buttonDiv" >
            <Button variant="outline-light" onClick={()=>handleClick()}>
              Github
            </Button>
            </div>

        </div>
      );
    }
    return (
      <div className="Home">
        <div className="lander">
          <h1>Dook Robotics</h1>
          <p>Fred and Harriet Cox Senior Design Competition Fall 2019</p>
          <Contact/>
        </div>
        <div className="words">
          <Fade top>
            <h1>Who We Are</h1>
            <Container>
              <Row>
                <Col>We are a large group of interdiscplinary students that aimed to build a fully-autonomous, consumer-friendly, and affordable pooper scooper robot (named Dook) for the Fall 2019 Fred and Harriet Cox Senior Design Competition.
Operationally, Dook will move randomly around the yard until it recognizes waste in the environment and then proceed toward the waste. Dook will then align itself until positioning the waste directly under its vacuum. It will then pick up the target and store it in a removable  waste bag. When Dook’s bin is full or battery power is low it will come to a complete stop and the user will be notified through the Dook app.
                </Col>
                <Col>
                  <Image src={require('../images/showcase.png')} fluid />
                </Col>
              </Row>
            </Container>
          </Fade>
        </div>
        <div className="Award">
          <Fade top>
            <h1>Awards</h1>
            <Container>
              <Row>
                <Col>
                  <Image src={require('../images/first-place.png')} fluid />
                  1st Place Interdiscplinary Project
                </Col>
                <Col>
                  <Image src={require('../images/team-congeniality.png')} fluid />
                  Team Congeniality Award
                </Col>
              </Row>
            </Container>
          </Fade>
        </div>
        <Footer/>
      </div>
    );
  }
}
