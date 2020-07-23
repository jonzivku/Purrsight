//Profile.js
import React from 'react';
import {Row, Col, CardColumns } from 'react-bootstrap';
import catOne from './static/catOne.jpg'
import catThree from './static/3.png'
import PictureCard from './components/PictureCard.js';
import PostingCard from './components/PostingCard.js'
import {ProfileCard} from './ProfileCard.js'
import NavBar from './NavBar';

class Profile extends React.Component{
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
                <ProfileCard pfp={catOne} name= "Shane" bio= "I LOVE cats" ></ProfileCard>
                <PostingCard />
                <PictureCard name="Shane" profilePicture={catOne} picture={catThree} description="Hey look a dang gcat" />
                <PictureCard name="Shane" profilePicture={catOne} picture={catThree} description="Hey I found the same cat" />
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
