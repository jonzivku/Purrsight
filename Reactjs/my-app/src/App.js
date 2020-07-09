import React, { useState } from 'react';
import {Row, Col, InputGroup, Jumbotron, Container, Button, Form, FormControl, Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

const NAV = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/Home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-front">
          <Nav.Link href="/Profile">Profile</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/SignIN">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

function Home() {
  return (
    <div>
      <h1>waaaah issa hommeeee</h1>
    </div>  
  );
}

function SignIn(){
  return (
    <div>
      <Row>
        <Col md={{ span: 4, offset: 4 }} fluid="md">
          <Form>
            <h2>Sign In</h2>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" >
            Join
          </Button>
        </Col>
      </Row>
    </div>
    )
}

function SignUp() {
  return (
    <div>
      <Row>
        <Col md={{ span: 4, offset: 4 }} fluid="md">
          <Form>
            <h2>Sign Up</h2>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="8-12 characters" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Confirm Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Enter your password again" />
              </Col>
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" >
            Join
          </Button>
        </Col>
      </Row>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>waaaah issa meeeeee</h1>
    </div>
  );
}

const App = () => (
  <>
    <Jumbotron>
      <h1 className="header">P U R R S I G H T</h1>
      <NAV>
      </NAV>
    </Jumbotron>
    <Router>
      <div>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/SignIn">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
