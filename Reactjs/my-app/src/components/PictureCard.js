import React from 'react';
import { Container, Card, Button, Row, Image, Col } from 'react-bootstrap';

export default function PictureCard(props) {

  const {name, profilePicture, picture, description} = props.post;

  return (
    <Card fluid>
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
