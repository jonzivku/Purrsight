//NavBar.js
import React from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from "prop-types";

class NavBar extends React.Component{

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // };

  handleLogout = (e) => {
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    // const { match, location, history } = this.props;
    return (
      //<nav class ="fixed-top"> fixes navbar to top, but doesn't properly align information below
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/Home">P U R R S I G H T</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-front">
              <Nav.Link href="/Profile">Profile</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Button variant="danger" type="submit" onClick={this.handleLogout}>Sign Out</Button>
            </Nav>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      //</nav>
  )}
  ;
};
            // <Button variant="danger" type="submit" onClick={props.onLogout}>Sign Out</Button>

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()) 
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));