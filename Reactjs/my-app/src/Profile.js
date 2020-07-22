//Profile.js
import axios from 'axios';
import React, {Component} from 'react';
import {Row, Col, CardColumns } from 'react-bootstrap';
import catOne from './static/catOne.jpg'
import catTwo from './static/2.jpg'
import catThree from './static/3.png'
import PictureCard from './components/PictureCard.js';
import PostingCard from './components/PostingCard.js'
import ProfileCard from './ProfileCard.js'
import {IsUser} from './IsUser.js';
import NavBar from './NavBar';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      testPost: {
      name:"Shane",
      profilePicture: catTwo,
      picture: catThree,
      description:"Hey look a dang gcat"
      }
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        console.log(response)
        this.setState({posts: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { posts } = this.state
    return (
      <>
        <NavBar>
        </NavBar>
        <br />
        <div>
          <Row className="justify-content-md-center">
            <Col md={{span: 8}}>
              <CardColumns>
                <IsUser pfp={catOne} name= "Shane" bio= "I LOVE cats"> </IsUser>
                <PostingCard />
                <PictureCard post={this.state.testPost} />
              </CardColumns>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

                // <IsUser name={posts.title} bio={posts.body}/>
export default Profile