//WelcomeCard.js
import React from 'react';
import {Image, Card, Button} from 'react-bootstrap';

export function WelcomeCard(props) {
  return (
    <>
      <Card className="text-center">
        <Image src={props.pfp} roundedCircle/>
        <Card.Body>
          <Card.Title>Welcome! <div/>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}