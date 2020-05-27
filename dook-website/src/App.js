//react-reveal installed
//Test
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import Image from 'react-bootstrap/Image'
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light" sticky = "top">
          <Navbar.Brand href="/">dook robotics</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/features">Technobabble</Nav.Link>

          </Nav>
        </Navbar>
        <Routes />
      </React.Fragment>

    );
  }
}

export default App;
