import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { connect } from 'react-redux';

import {NavBar} from './containers/NavBar.js';
import {DataFetching} from './containers/DataFetching.js';
import * as actions from './store/actions/auth';
import BaseRouter from './router';
import NavBar from './containers/NavBar';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render(){
    return(
      <div className="App">
        <Router>
          <NavBar ...this.props>
            <BaseRouter />
          </NavBar>        
        </Router>  
      </div>
    );
  }
}

// add {...this.props} to a container as such <'container' {...this.props}> to gain access to isAuthenticated as part of props

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);