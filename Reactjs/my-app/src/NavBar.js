//NavBar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useAuth } from "./context/auth"

export const NavBar = (props) => {

	const { setAuthTokens } = useAuth();
	
	function logOut() {
		setAuthTokens();
	}

	return (
		<Navbar bg="light" expand="lg" fluid>
			<Navbar.Brand href="/Home">Home</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="justify-content-front">
					<Nav.Link href="/Profile">Profile</Nav.Link>
				</Nav>
				<Nav className="justify-content-front">
					<Nav.Link href="/DataFetching">DataFetching</Nav.Link>
				</Nav>
				<Navbar.Collapse className="justify-content-end">
				<Nav className="justify-content-end">
					<Nav.Link href="/SignUp">Sign Up</Nav.Link>
				</Nav>
				<Nav className="justify-content-end">
					<Nav.Link href="/SignIN">Sign In</Nav.Link>
				</Nav>
				<Button onClick={ logOut }>Sign out</Button>
				</Navbar.Collapse>
			</Navbar.Collapse>
		</Navbar>
	);
};
