//SignOut.js
import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';


class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password1: '',
      password2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePassword2 = this.handlePassword2.bind(this);
  }  

  handleSubmit = (e) => {

    e.preventDefault();

        this.props.onAuth(
            this.state.email,
            this.state.password1,
            this.state.password2
        );    
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password1: event.target.value});
  }

  handlePassword2 = (event) =>  {
    this.setState({password2: event.target.value});
  }

  render() {
    return (
          <div>
            <Row className="justify-content-md-center">
              <Col md={{ span: 4}} fluid="md">
                <Form>
                  <h2>Sign Up</h2>
                  <Form.Group as={Row} controlId="email">
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" value = {this.state.email} onChange={this.handleEmail}/>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalPassword1">
                    <Form.Label column sm={2}>
                      Password
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="8-12 characters" value = {this.state.password1} onChange={this.handlePassword}/>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalPassword2">
                    <Form.Label column sm={2}>
                      Confirm Password
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="Enter your password again" value = {this.state.password2} onChange={this.handlePassword2} />
                    </Col>
                  </Form.Group>
                </Form>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                  Signup
                </Button>
                <div>{this.state.email}</div>{this.state.password1},{this.state.password2}
              </Col>
            </Row>
          </div>
   );
  }
}


const mapStateToProps = (state) => ({
        loading: state.loading,
        error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password1, password2) => dispatch(actions.authSignup(email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);