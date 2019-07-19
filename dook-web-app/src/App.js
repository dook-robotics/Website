import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Routes from "./Routes";


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg="dark" variant="dark" sticky = "top">
          <Navbar.Brand href="/">dook robotics</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
