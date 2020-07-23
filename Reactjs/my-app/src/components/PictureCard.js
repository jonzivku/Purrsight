import React from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';

export default function PictureCard(props) {

  // const {name, profilePicture, picture, description} = props.post;

  return (
    <>
    <Card >
      <Card.Header>
        <Row>
          <Col md={{span:2}}>
            <Image style = {{width: 50, height: 50}} src={props.profilePicture} roundedCircle />
          </Col>
          <Col >
            <Card.Title >
              {props.name}
            </Card.Title>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Img  src={props.picture} />
    </Card>
  </>
  );
}
