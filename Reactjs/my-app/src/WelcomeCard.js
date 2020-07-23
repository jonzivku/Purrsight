//WelcomeCard.js
import React from 'react';
import {Image, Card} from 'react-bootstrap';

export function WelcomeCard(props) {
  console.log(props.profile);
  return (
    <>
      <Card className="text-center">
        <Image src={props.profile.php} roundedCircle/>
        <Card.Body>
          <Card.Title>Welcome! <div />{props.profile.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
