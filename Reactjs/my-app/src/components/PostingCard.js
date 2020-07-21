import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
// import ImageUploader from 'react-images-upload';

// Post localhost:8000/profile/posts/ { token, picture, description }

export default class PostingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
      picture: '',
      description: '',
      noPhoto: true
    }
  }

  fileSelectedHandler = e => {
    this.setState({
      [e.target.name]: e.target.files[0],
      noPhoto: false
    })
    console.log(e.target.name)
  }

  descriptionChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value);
  }

  submitHandler = () => {
    // need to check for null before we continue
    const fd = new FormData();

    // TODO: testjunk, fix
    fd.append('profilepicture',
      this.state.picture)
    fd.append('bio',
      this.state.description)

    const config = { headers: {
      'content-type': 'multipart/form-data',
      Authorization: this.state.token
    }}



    axios.post('http://localhost:8000/profile/', fd, config)
      .then(res => {
        console.log(res);
    })
  }
  //
  // removeImage = id => {
  //   this.setState({
  //     images: this.state.images.filter(image => image.public_id !== id)
  //   })
  // }

  render() {
    let { description } = this.state;
    return (
      <>
        <Row className="justify-content-md-center">
          <Col md={{ span: 4 }}>
            <Form onSubmit={this.submitHandler}>
              <Form.Group >
                <Form.File.Input onChange={this.fileSelectedHandler} name="picture" />
                <Form.Control type="text" name="description" value={description} onChange={this.descriptionChangeHandler} placeholder="Tell me more" as="textarea" rows="3" />

                <Button type="submit" variant="primary" disabled={this.state.noPhoto} style={{float: "right"}}>
                  Post
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </>
    )
  }

}
