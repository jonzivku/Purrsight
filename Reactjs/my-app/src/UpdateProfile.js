//UpdateProfile.js
import React, {Component} from 'react';
import axios from 'axios';
import {Row, Col, Button, Form} from 'react-bootstrap';
import {NavBar} from './NavBar.js';

class UpdateProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bio: ''
    };
  }
  
  id = localStorage.getItem( 'id' );

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8000/profile/{$id}', 
        this.state
      )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render () {
    const {name, bio} = this.state
    return(
      <>
        <NavBar>
        </NavBar>
        <Row className="justify-content-md-center">
          <Col md={{span: 4}}>
            <Form onSubmit={this.submitHandler}>
              <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Enter new Name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Update Bio</Form.Label>
                <Form.Control type="text" name="bio" value={bio} onChange={this.changeHandler} as="textarea" rows="3" />
              </Form.Group>
              <Button type="submit" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    )
  }
}

export default UpdateProfile