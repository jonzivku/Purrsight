//SignIn.js
import React, { useState } from 'react';
import {Row, Col, Button, Form } from 'react-bootstrap';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
// import logoImg from "./img/3.png"
// import logoImg from "../img/logo.jpg";
// import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "./context/auth";
import { AlertDismissible } from "./components/Alerts"

export function SignIn(props){

  const referer = props.location.state.referer || '/';

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postSignIn(){
    axios.post("http://localhost:8000/admin/auth/user/", {
      email,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else{
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }


	return (
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
									value={password}
                  placeholder="Password"
									onChange={e => {
										setPassword(e.target.value);
									}} 
								/>
							</Col>
						</Form.Group>
					</Form>
					<Button 
            variant="primary" 
            type="submit"
            onClick={postSignIn}
          >
						Sign In
					</Button>
          <Link to="/SignUp">Don't have an account?</Link>
            { isError && <AlertDismissible /> }           }
				</Col>
			</Row>
		</div>
	)
}