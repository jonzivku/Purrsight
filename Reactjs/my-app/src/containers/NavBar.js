//NavBar.js
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Profile} from './Profile.js';
import {Home} from './Home.js';
import * as actions from '../store/actions/auth';

class NavBar extends React.Component() {

  
  render(){
    return (
      <Jumbotron>
      <h1 className="header">P U R R S I G H T</h1>
        <Navbar bg="light" expand="lg">
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
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </Jumbotron>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(actions.logout())
	};
};

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));