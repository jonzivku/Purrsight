import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import {Jumbotron, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {SignIn} from './SignIn.js';
import {SignUp} from './SignUp.js';
import {Profile} from './Profile.js';
import {Home} from './Home.js';
import {NavBar} from './NavBar.js';
import {DataFetching} from './DataFetching.js';
import './App.css';

class App extends Component {
  render(){
    return(<>
      <Jumbotron>
        <h1 className="header">P U R R S I G H T</h1>
        <NavBar>
        </NavBar>
      </Jumbotron>
      <Router>
        <div>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/SignIn">
              <SignIn />
            </Route>
            <Route exact path="/DataFetching">
              <DataFetching />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )}
}

export default App;
