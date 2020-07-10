//SignIn.js
import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';

export function SignIn(){
	return (
	<div>
		<Row className="justify-content-md-center">
			<Col md={{ span: 4 }} fluid="md">
				<Form>
					<h2>Sign In</h2>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							Email
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="email" placeholder="Email" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalPassword">
						<Form.Label column sm={2}>
							Password
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="password" placeholder="Password" />
						</Col>
					</Form.Group>
				</Form>
				<Button variant="primary" type="submit" >
					Sign In
				</Button>
			</Col>
		</Row>
	</div>
	)
}