import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
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
      // filename: 'default'
    }
    console.log(this.state.token);
  }

  fileSelectedHandler = e => {
    this.setState({[e.target.name]: e.target.files[0] })
    // this.setState({filename: e.target.name})
  }

  descriptionChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value);
  }

  fileUploadHandler = () => {
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
    }
    axios.post('http://localhost:8000/profile/', fd, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total)
      }
    })
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
    // const { uploading, images } = this.state

    return(
      <Card>
        <Card.Header>
          <input type="file" onChange={this.fileSelectedHandler} />
        </Card.Header>
        <Card.Body>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={this.descriptionHandler}
            />

    // );
    let { token, picture, description } = this.state;



    return (

      <>
        <Row className="justify-content-md-center">
          <Col md={{ span: 4 }}>
            <Form onSubmit={this.submitHandler}>
              <Form.Group >
                <Form.File.Input onChange={this.fileSelectedHandler} name="picture" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Update Bio</Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={this.descriptionChangeHandler} placeholder="Tell me more" as="textarea" rows="3" />
              </Form.Group>
              <Form.Label>Picture</Form.Label>

              <Button type="submit" variant="primary" >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    )
  }

}
