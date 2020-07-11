//SignIn.js
import React, {useState, useEffect} from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import axios from 'axios';

export function SignIn(){
  const [post, setPost] = useState({})
  const [user, setUser] = useState(1)
  const [userFromButtonClick, setUserFromButtonClick] = useState(1)
  const [pass, setPass] = useState(1)
  const [passFromButtonClick, setPassFromButtonClick] = useState(1)
  const handleClick = () => [setPassFromButtonClick(pass), setUserFromButtonClick(user)]
  useEffect(() => { axios
      .get(`https://127.0.0.1:8000/${user}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
        })
      .catch(err => {
        console.log(err)
        })
  }, [userFromButtonClick, passFromButtonClick])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Home">P U R R S I G H T</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
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
                  <Form.Control type="email" placeholder="Email" value={user} onChange={e => setUser(e.target.value)}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)}/>
                </Col>
              </Form.Group>
            </Form>
            <Button variant="primary" type="submit" href = "/home">
              Sign In
            </Button>
            <Button variant="primary" type="submit" href = "/SignUp">
              Sign Up
            </Button>
            <div>{user}</div>{pass}
          </Col>
        </Row>
      </div>
    </>
  )
}