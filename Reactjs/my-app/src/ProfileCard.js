//ProfileCard.js
import React from 'react';
import {Card, Button} from 'react-bootstrap';

export function ProfileCard(props) {
  return (
    <>
      <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img variant="left" src={props.pfp} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.bio}
            {props.location}
          </Card.Text>
          <Button variant="primary" href="/UpdateProfile">Update</Button>
        </Card.Body>
      </Card>
    </>
  );
}
