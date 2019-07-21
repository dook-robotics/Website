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
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light" sticky = "top">
          <Navbar.Brand href="/">dook robotics</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/media">Media</Nav.Link>
            <Nav.Link href="https://github.com/dook-robotics">Github</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
        <Routes />
      </React.Fragment>

    );
  }
}

export default App;
