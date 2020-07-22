//GuestCard.js
import React from 'react';
import {Card} from 'react-bootstrap';

export function GuestCard(props) {
  return (
    <>
      <Card className="text-center">
        <Card.Img src={props.pfp} fluid/>
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