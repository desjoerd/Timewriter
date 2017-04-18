import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { authCallback } from '../api/auth';

export default class LoginHandler extends Component {

  constructor() {
    super();

    this.state = {
      loggingIn: true,
      loggedIn: false,
    };
  }

  componentDidMount = () => {
    const { location } = this.props;
    authCallback(location.hash)
      .then((user) => {
        this.setState((prevState) => ({
          loggingIn: false,
          loggedIn: user !== undefined,
        }));
      });
  }

  render = () => {
    const { loggingIn, loggedIn } = this.state;
    if(loggedIn) {
      return (<Redirect to="/" />);
    } else if(!loggingIn) {
      return (<p>Error logging in</p>)
    } else {
      return null;
    }
  }
}