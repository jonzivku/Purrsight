//Home.js
import React from 'react';
import {NavBar} from './NavBar.js';
import {Row, Col, Button, Form, Card, Image} from 'react-bootstrap';
import catOne from './catOne.jpg'
import catTwo from './2.jpg'
import catThree from './3.png'
export function Home() {
  return (
    <>
      <NavBar>
      </NavBar>
      <div>

        <Row className="justify-content-md-center">
          <Col md={{span: 4}} >
            <Card >
              <Card.Img variant="top" src={catOne} alt="cat" fluid/>
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
              <Card.Img variant="top" src={catThree} alt="cat" fluid/>
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
  );
}