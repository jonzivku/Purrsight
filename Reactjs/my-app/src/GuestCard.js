//GuestCard.js
import React from 'react';
import {Image, Card} from 'react-bootstrap';

export function GuestCard(props) {
  return (
    <>
      <Card className="text-center">
<<<<<<< HEAD
        <Card.Img src={props.pfp} fluid/>
=======
        <Image src={props.pfp} roundedCircle/>
>>>>>>> origin/demo
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.bio}
            {props.location}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}