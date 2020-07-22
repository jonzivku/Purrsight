import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Switch } from "react-router";
import Login from './Login';
//import PrivateRoute from './components/PrivateRoute'
import Register from './Register';
import Profile from './Profile';
import UpdateProfile from './UpdateProfile.js';
import Home from './Home';
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';


import './App.css';

class App extends Component {

  render(){
    return(
      <Router{...this.props}>
        <Switch>
          <Route exact path = "/" component = {Login} />{" "}
          <Route exact path = "/SignUp/" component = {Register} />{" "}
          <Route exact path = "/Profile/" component = {Profile} />{" "}
          <Route exact path = "/UpdateProfile/" component = {UpdateProfile} />{" "}
          <Route exact path = "/Home/" component = {Home} />{" "}
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
