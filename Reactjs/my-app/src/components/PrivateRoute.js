import React from 'react';
import { Route, Redirect,withRouter } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      props.isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

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
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));