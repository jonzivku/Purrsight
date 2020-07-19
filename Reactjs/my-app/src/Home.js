//Home.js
import React from 'react';
import {NavBar} from './NavBar.js';
import {Row, Col, Card} from 'react-bootstrap';
import catOne from './catOne.jpg'
import catTwo from './2.jpg'
import catThree from './3.png'
import PictureCard from './components/PictureCard.js';
import PostingCard from './components/PostingCard.js'
export function Home() {
  let testPost = {name:"foo",
                  profilePicture: catTwo,
                  picture: catThree,
                  description:"Hey look a dang gcat"
                };

  return (
    <>
      <NavBar>
      </NavBar>
      <div>

        <Row className="justify-content-md-center">
          <Col md={{span: 4}} >
            <PostingCard />
            <PictureCard post={testPost} />
          </Col>
        </Row>
      </div>
    </>
  );
}
