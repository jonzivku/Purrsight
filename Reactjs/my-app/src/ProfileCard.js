//ProfileCard.js
import React from 'react';
import {Image, Card, Button} from 'react-bootstrap';
// import UpdateProfile from './UpdateProfile.js'

export function ProfileCard(props) {
  console.log(props.profile.pfp);
  return (
    <>
      <Card className="text-center">
        <Image src={props.profile.pfp} roundedCircle/>
        <Card.Body>
          <Card.Title>{props.profile.name}</Card.Title>
          <Card.Text>
            {props.profile.bio}
            {props.profile.location}
          </Card.Text>
          <Button variant="primary" href="/UpdateProfile/">Update</Button>
        </Card.Body>
      </Card>
    </>
  );
}
