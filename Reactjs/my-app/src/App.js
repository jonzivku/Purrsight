import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import BaseRouter from './router';
import './App.css';
import { connect } from 'react-redux';

import * as actions from './store/actions/auth';


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render(){
    return(
        <Router >
          <BaseRouter />
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