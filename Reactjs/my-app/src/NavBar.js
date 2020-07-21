//NavBar.js
import React from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';

const NavBar = (props) => {
  return (
    //<nav class ="fixed-top">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Home">P U R R S I G H T</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-front">
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Button variant="danger" type="submit" onClick={props.onLogout}>Sign Out</Button>
            <Nav.Link href="/">Sign Out</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    //</nav>
  );
};


const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);