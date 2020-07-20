import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';
// import ImageUploader from 'react-images-upload';

// Post localhost:8000/profile/posts/ { token, picture, description }
export default class PostingCard extends React.Component {

  state = {
    token: null,
    picture: null,
    description: null
  }

  fileSelectedHandler = event => {
    this.setState({
      picture: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('picture',
      this.state.picture,
      this.state.picture.name)

    axios.post('http://localhost:8000/profile/posts/', fd, {
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
          <Form.Control as="textarea" rows="3" />
          <Button variant="primary" onClick={this.fileUploadHandler}>
            Upload
          </Button>
        </Card.Body>
      </Card>

    );
  };

}
