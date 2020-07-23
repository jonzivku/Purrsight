//Profile.js
import axios from 'axios';
import React from 'react';
import {Row, Col, CardColumns } from 'react-bootstrap';
import catOne from './static/catOne.jpg'
import catThree from './static/3.png'
import PictureCard from './components/PictureCard.js';
import PostingCard from './components/PostingCard.js'
import {ProfileCard} from './ProfileCard.js'
import NavBar from './NavBar';

axios.defaults.baseURL = '';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
      name: '',
      bio: '',
      imgsrc: '',
      testPost: {
      name:"Shane",
      profilePicture: catOne,
      picture: catThree,
      description:"Hey look a dang gcat"
      }
    };
  }

  componentDidMount() {

    const config = { headers: {
      Accept: '*/*',
      Authorization: 'token ' + this.state.token,

    }}
    console.log('printing token ' +this.state.token)
    axios.get('http://localhost:8000/profile/', config,
    ).then(res => {
      this.setState({'name': res.data.name});
      this.setState({'bio': res.data.bio});
      this.setState({'imgsrc': 'http://localhost:8000' + res.data.profilepicture});
      console.log(this.state.name);
      console.log(this.state.bio);
      console.log(this.state.imgsrc);
    })
    .catch(error => {
      console.log(error);
      this.setState({error: 'User already exists or email password combination is invalid.'});
    })  
  }
  
  render() {
    return (
      <>
        <NavBar>
        </NavBar>
        <br />
        <div>
          <Row className="justify-content-md-center">
            <Col md={{span: 8}}>
              <CardColumns>
                <ProfileCard imgurl={this.state.imgsrc} name ={this.state.name} bio= {this.state.bio} ></ProfileCard>
                <PostingCard />
                <PictureCard name="Shane" profilePicture={catOne} picture={catThree} description="Hey look a dang gcat" />
                <PictureCard name="Shane" profilePicture={catOne} picture={catThree} description="Hey I found the same cat" />
              </CardColumns>
            </Col>
          </Row>
        </div>
      </>
    )
  };
}

// <IsUser name={posts.title} bio={posts.body}/>
export default Profile
