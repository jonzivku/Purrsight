//ProfileCard.js
import React from 'react';
import {Image, Card, Button} from 'react-bootstrap';
// import UpdateProfile from './UpdateProfile.js'

export function ProfileCard(props) {
  return (
    <>
      <Card className="text-center">
        <Image src={props.pfp} roundedCircle/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.bio}
            {props.location}
          </Card.Text>
          <Button variant="primary" href="/UpdateProfile/">Update</Button>
        </Card.Body>
      </Card>
    </>
  );
}
