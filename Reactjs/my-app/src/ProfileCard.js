//ProfileCard.js
import React from 'react';
import {Card} from 'react-bootstrap';

export function ProfileCard(props) {
  return (
    <>
      <Card className="text-center">
        <Card.Img style = {{width: 50, height: 50}} variant="left" src={props.pfp} />
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