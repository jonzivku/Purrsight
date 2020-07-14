import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import BaseRouter from './router';
import './App.css';

class App extends Component {

  render(){
    return(
        <Router>
          <BaseRouter />
        </Router>
    )
  }
}

export default App;