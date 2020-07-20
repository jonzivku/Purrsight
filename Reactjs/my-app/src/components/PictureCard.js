import React from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';

export default function PictureCard(props) {

  const {name, profilePicture, picture, description} = props.post;

  return (
    <Card >
      <Row>
        <Col>
          <Image src={profilePicture} thumbnail />
        </Col>
        <Col>
          {name}
        </Col>
      </Row>
      <Row>
        <Image src={picture} thumbnail />
        {description}
      </Row>
    </Card>
  );

}
