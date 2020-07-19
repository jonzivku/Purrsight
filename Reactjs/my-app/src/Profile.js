//Profile.js
//userID={posts.userID} pageID={posts.pageID}
import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import {Row, Col, Button, Card} from 'react-bootstrap';
import {ProfileCard} from './ProfileCard.js';
import {NavBar} from './NavBar.js';
import {IsUser} from './IsUser.js';

class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: []
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
        <div>
          <Row className="justify-content-md-center">
            <Col md={{ span: 2 }}>
              <IsUser name={posts.title} bio={posts.body}> </IsUser>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Profile
