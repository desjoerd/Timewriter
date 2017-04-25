import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router'
import { connect } from 'react-redux';
import { authCallback } from '../config/auth';
import { handleLogin } from '../actions/session';
import { isAuthenticated, isSessionLoading } from '../reducers';

class LoginHandler extends Component {

  componentDidMount = () => {
    const { location, dispatch } = this.props;
    console.log("authCallback");
    authCallback(location.hash)
      .then((user) => {
        if(user) {
          window.sessionStorage.setItem('accessToken', user.accessToken);
        }
        dispatch(handleLogin(user));
      });
  }

  render = () => {
    const { isLoading, isAuthenticated } = this.props;
    if(!isLoading && !isAuthenticated) {
    } else if (isLoading) {
      return (<p>Loading...</p>);
    } else if (isAuthenticated) {
      return (<Redirect to={{ pathname: '/' }} />);
    }
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  isLoading: isSessionLoading(state),
  isAuthenticated: isAuthenticated(state),
});

export default withRouter(connect(mapStateToProps)(LoginHandler));
