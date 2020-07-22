//SignIn.js
import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import { Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component{
 
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      error:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }  

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/rest-auth/login/', {//send username and password to rest authorization
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            console.log('Successful Login');
            this.props.history.push('/Home');
        })
        .catch(error => {
          console.log(error);
          this.setState({error: 'Invalid email password combination.'});
        })  
    
  };

  handleEmail = (event) => {
    this.setState({email: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }

  render() {
      return (
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/Home">P U R R S I G H T</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Navbar>
          <br />
          <div>
            <Row className="justify-content-md-center">
              <Col md={{ span: 4 }} fluid="md">
                <Form>
                  <h2>Sign In</h2>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" value = {this.state.email} onChange={this.handleEmail}/>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                      Password
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="Password" value = {this.state.password1} onChange={this.handlePassword}/>
                    </Col>
                  </Form.Group>
                </Form>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                  Sign In
                </Button>
                <Button variant="primary" type="submit" href = "/SignUp">
                  Sign Up
                </Button>
                <div>{this.state.error}</div>
              </Col>
            </Row>
          </div>
        </>    
      )
    };
  }


const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  isAuthenticated: state.token !== null
});

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.authLogin(email, password)),
    waitResponse: () => dispatch(actions.reduxWait())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));