import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Jumbotron, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import BaseRouter from './router';
import './App.css';

class App extends Component {

  render(){
    return(
      <>
        <Router>
          <BaseRouter />
        </Router>
      </>
    )
  }
}

export default App;
