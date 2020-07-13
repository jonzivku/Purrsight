//Profile.js
import React from 'react';
import {Row, Col, Button, Card } from 'react-bootstrap';
import catOne from './img/catOne.jpg'
import catTwo from './img/2.jpg'
import catThree from './img/3.png'
export function Profile(){

	return (
		<div>
			<Row className="justify-content-md-center">
				<Col md={{span: 2}}>
					<Card style={{ width: '18rem' }}className="text-center">
						<Card.Img variant="left" src={catTwo} />
						<Card.Body>
							<Card.Title>Slim Shady</Card.Title>
							<Card.Text>
							Hi! My name is what?
							My name is who?
							My name is
							</Card.Text>
							<Button variant="primary">Facebook</Button>

						</Card.Body>
					</Card>
				</Col>
				<Col md={{span: 4}}>
					<Card >
						<Card.Img variant="top" src={catOne} alt="cat" fluid/>
							<Card.Body>
								<Card.Title>Ma cAt post</Card.Title>
								<Card.Text>
									Thissa post
								</Card.Text>
							</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
					<Card >
						<Card.Img variant="top" src={catThree} alt="cat" fluid/>
							<Card.Body>
								<Card.Title>Ma cAt post</Card.Title>
								<Card.Text>
									Thissa post
								</Card.Text>
							</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 5 mins ago</small>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</div>
	)
}