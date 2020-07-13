//SignOut.js
import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Row, Col, Button, Form} from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from "./context/auth";
import { AlertDismissible } from './components/Alerts'
  
export function SignUp() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { setAuthTokens } = useAuth();
  const [errorMsg, setErrorMsg] = useState();

  function ValidateEmail(email) 
  {
   if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      return (false)
  }

  function postSignUp(){
    // compare passwords first
    // still need to email validate
    if (!ValidateEmail(email)){
      setIsError(true);
      setErrorMsg("Invalid Email");
      return;
    }


    console.log(password + " " + password2);
    if (password !== password2){
      setIsError(true);
      setErrorMsg("Your passwords don't match. Try again");
      return;
    }

    axios.post("http://localhost:8000/admin/auth/user/", {
      email,
      password
    }).then(result => {
      console.log(result);
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else{
        setIsError(true);
        setErrorMsg("Bad response");
      }
    }).catch(e => {
      setIsError(true);
      setErrorMsg("That didn't go well..." + e);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }


  return (
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
                <Form.Control
                  type="email" 
                  placeholder="email"
                  value={email} 
                  onChange={e => {
                    setEmail(e.target.value);
                  }} 
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="8-12 characters"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }} 
                  />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Confirm Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Enter your password again"
                  value={password2}
                  onChange={e => {
                    setPassword2(e.target.value);
                  }} 
                />
              </Col>
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" onClick={postSignUp}>
            Join
          </Button>
          <Link to="/SignIn">Already have an account?</Link>
          { isError && <AlertDismissible message={errorMsg} />}
        </Col>
      </Row>
    </div>
  );
}