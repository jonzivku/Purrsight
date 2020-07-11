//SignOut.js
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Row, Col, Button, Form} from 'react-bootstrap';

export function SignUp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Home">P U R R S I G H T</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
        <div>
          <Row className="justify-content-md-center">
            <Col md={{ span: 4}} fluid="md">
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
              <Button variant="primary" type="submit" href = "/home">
                Join
              </Button>
            </Col>
          </Row>
        </div>
    </>
  );
}