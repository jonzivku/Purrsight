import React from 'react';
import { Card, Button} from 'react-bootstrap';
// import ImageUploader from 'react-images-upload';

export default class PostingCard extends React.Component {
// Post localhost:8000/profile/posts/ { token, picture, description }

  // state = {
  //   uploading: false,
  //   images: []
  // }

  fileSelectedHandler = event => {
    console.log(event);
  }
    // const files = Array.from(e.target.files)
    // this.setState({ uploading: true })

    // const formData = new FormData()

    // // files.forEach((file, i) => {
    // //   formData.append(i, file)
    // // })

    // fetch(`http://localhost:8000/profile/posts/`, {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(res => res.json())
    // .then(images => {
    //   this.setState({
    //     uploading: false,
    //     images
    //   })
    // })


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
          <Card.Title>Special title treatment</Card.Title>

          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Upload</Button>
        </Card.Body>
      </Card>

    );
  };

}
