import React from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';

export default function PictureCard(props) {

  // const {pfp, name, description, picture} = props.picture;

  return (
    <>
    <Card >
      <Card.Header>
        <Row>
          <Col md={{span:2}}>
            <Image style = {{width: 50, height: 50}} src={props.picture.pfp} roundedCircle />
          </Col>
          <Col >
            <Card.Title >
              {props.picture.name}
            </Card.Title>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {props.picture.description}
        </Card.Text>
      </Card.Body>
      <Card.Img src={props.picture.picture} />
    </Card>
  </>
  );
}
