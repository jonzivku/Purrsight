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
      picture: null,
      description: "description"
    }
    console.log(this.state.token);
  }

  fileSelectedHandler = event => {
    this.setState({
      picture: event.target.files[0]
    })
  }

  descriptionHandler = e => {
    this.setState({
      description: e
    })
    console.log(this.state.description);
  }

  fileUploadHandler = () => {
    // need to check for null before we continue
    const fd = new FormData();

    // TODO: testjunk, fix
    fd.append('profilepicture',
      this.state.picture)
    fd.append('bio',
      'this.state.description')
    fd.append('name',
      'this.state.description')
   
    axios.defaults.headers = {
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

          <Button
            type="submit"
            variant="primary"
            onClick={this.fileUploadHandler}
            >
            Upload
          </Button>

        </Card.Body>
      </Card>

    );
  };

}
