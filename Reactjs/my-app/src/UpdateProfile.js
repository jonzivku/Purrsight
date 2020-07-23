//UpdateProfile.js
import React, {Component} from 'react';
import axios from 'axios';
import {Row, Col, Button, Form} from 'react-bootstrap';
import NavBar from './NavBar.js';

class UpdateProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
      picture: '',
      name: '',
      bio: '',
      image: '',
    };
  }

  fileSelectedHandler = e => {
    this.setState({
      [e.target.name]: e.target.files[0],
      noPhoto: false
    })
    console.log(e.target.name)
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value);
  }

  submitHandler = () => {
    // need to check for null before we continue
    const fd = new FormData();

    fd.append('profilepicture',
      this.state.picture)
    fd.append('name',
      this.state.name)
    fd.append('bio',
      this.state.bio)

    const config = { headers: {
      'content-type': 'multipart/form-data',
      Authorization: 'token ' + this.state.token
    }}

    axios.put('http://localhost:8000/profile/1/', fd, config)
      .then(res => {
        console.log(res);
    })
  }


  render () {
    const {name, bio} = this.state
    return(
      <>
        <NavBar>
        </NavBar>
        <br/>
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
               <Form.File.Input onChange={this.fileSelectedHandler} name="picture" />
              <Button type="submit" variant="outline-primary" disabled={this.state.noPhoto} style={{float: "right"}}>
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
