//ProfileCard.js
import React from 'react';
<<<<<<< HEAD
import {Card} from 'react-bootstrap';
=======
import {Image, Card, Button} from 'react-bootstrap';
import UpdateProfile from './UpdateProfile.js'
>>>>>>> origin/demo

export function ProfileCard(props) {
  return (
    <>
      <Card className="text-center">
<<<<<<< HEAD
        <Card.Img style = {{width: 50, height: 50}} variant="left" src={props.pfp} />
=======
        <Image src={props.pfp} roundedCircle/>
>>>>>>> origin/demo
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.bio}
            {props.location}
          </Card.Text>
<<<<<<< HEAD

=======
          <Button variant="primary" href="/UpdateProfile/">Update</Button>
>>>>>>> origin/demo
        </Card.Body>
      </Card>
    </>
  );
}