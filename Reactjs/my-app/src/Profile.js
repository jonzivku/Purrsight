//Profile.js
import React from 'react';
import {Row, Col, CardColumns } from 'react-bootstrap';

import PictureCards from './components/PictureCards.js';
import PostingCard from './components/PostingCard.js'
import {ProfileCard} from './ProfileCard.js'
import NavBar from './NavBar';

class Profile extends React.Component{

  // constructor(props) {
  //   super(props);
  // }
  catOne = 'https://picsum.photos/200/300.jpg';
  catTwo = 'https://picsum.photos/200/300.jpg';
  catThree = 'https://picsum.photos/200/300.jpg';

  userProfile = {name:"Shane", pfp:this.catOne, bio:"I heart cats"};

  twoCats = [
    {name:"Shane", pfp:this.catOne, picture:this.catThree, description:"Hey look a dangcat1"},
    {name:"Shane", pfp:this.catOne, picture:this.catTwo, description:"Hayloook dangcat2"},
  ];

  fourCats = [
    {name:"Shane", pfp:this.catOne, picture:this.catThree, description:"Hey look a dangcat1"},
    {name:"Shane", pfp:this.catOne, picture:this.catTwo, description:"Hayloook dangcat2"},
    {name:"Shane", pfp:this.catOne, picture:this.catThree, description:"Hey look a dangcat3"},
    {name:"Shane", pfp:this.catOne, picture:this.catTwo, description:"Hayloook dangcat4"},
  ];

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
                <ProfileCard profile={this.userProfile} />
                <PostingCard />
                <PictureCards pictureArray={this.fourCats} />
              </CardColumns>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Profile
