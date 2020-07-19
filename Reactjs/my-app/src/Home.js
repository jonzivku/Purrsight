//Home.js
import React, {Component} from 'react';
import {NavBar} from './NavBar.js';
import {Row, Col, Card} from 'react-bootstrap';
import catOne from './catOne.jpg'
import {ProfileCard} from './ProfileCard.js'
import axios from 'axios';
import { StickyContainer, Sticky } from 'react-sticky';
//import catTwo from './2.jpg'
import catThree from './3.png'

class Home extends Component{
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
              <ProfileCard name={posts.title} bio={posts.body}> </ProfileCard>
            </Col>
              <Col md={{ span: 4 }} >
                <Card >
                  <Card.Img variant="top" src={catOne} alt="cat" fluid />
                  <Card.Body>
                    <Card.Title>Ma cAt post</Card.Title>
                    <Card.Text>
                      Thissa post
                  </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card >
                  <Card.Img variant="top" src={catThree} alt="cat" fluid />
                  <Card.Body>
                    <Card.Title>Ma cAt post</Card.Title>
                    <Card.Text>
                      Thissa post
                  </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 5 mins ago</small>
                  </Card.Footer>
                </Card>
              </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Home