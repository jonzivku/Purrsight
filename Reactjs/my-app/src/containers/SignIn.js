//SignIn.js
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {Row, Col, Button, Form} from 'react-bootstrap';

class SignIn extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) this.props.onAuth(values.username, values.password, false);
    });
    this.props.history.push('/');
}

  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }
    return (
      <div>
        <Row>
          <Col md={{ span: 4, offset: 4 }} fluid="md">
            <form o
            <Form onSubmit={this.handleSubmit}>
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
}