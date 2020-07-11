//NavBar.js
import React from 'react';
import {Jumbotron, Navbar, Nav} from 'react-bootstrap';

export const NavBar = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Home">P U R R S I G H T</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-front">
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Sign Out</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
  );
};
