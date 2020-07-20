import React from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
// import ImageUploader from 'react-images-upload';

// Post localhost:8000/profile/posts/ { token, picture, description }
export default class PostingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
      picture: null,
      description: null
    }
    console.log(this.state.token);
  }

  fileSelectedHandler = event => {
    this.setState({
      picture: event.target.files[0]
    })
  }

  descriptionChangeHandler = e => {
    this.setState({
      description: e
    })
    console.log(this.state.description);
  }

    // onUploadProgress: progressEvent => {
    //   console.log(progressEvent.loaded / progressEvent.total)
    // }

  submitHandler = () => {
    // need to check for null before we continue
    let fd = new FormData();

    // TODO: testjunk, fix
    fd.append('name',
      "foo")
    fd.append('profilePicture',
      this.state.picture,
      this.state.picture.name)
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
      .catch(error => {
        console.log(error);
    });
  }

  //
  // removeImage = id => {
  //   this.setState({
  //     images: this.state.images.filter(image => image.public_id !== id)
  //   })
  // }

  render() {
    // const { uploading, images } = this.state

    // return(
    //   <Card>
    //     <Card.Header>
    //       <input type="file" onChange={this.fileSelectedHandler} />
    //     </Card.Header>
    //     <Card.Body>
    //       <Form.Control
    //         as="textarea"
    //         rows="3"
    //         onChange={this.descriptionChangeHandler}
    //         />

    //       <Button
    //         type="submit"
    //         variant="primary"
    //         onClick={this.fileUploadHandler}
    //         >
    //         Upload
    //       </Button>

    //     </Card.Body>
    //   </Card>

    // );
    return (
      <>
        <Row className="justify-content-md-center">
          <Col md={{ span: 4 }}>
            <Form onSubmit={this.submitHandler}>
              <Form.Group >
                <Form.File value={this.state.picture} onChange={this.fileSelectedHandler} name="picture" label="Upload your picture here!" custom />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Update Bio</Form.Label>
                <Form.Control type="text" name="description" value={this.state.description} onChange={this.descriptionChangeHandler} placeholder="Tell me more" as="textarea" rows="3" />
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
  };

}
