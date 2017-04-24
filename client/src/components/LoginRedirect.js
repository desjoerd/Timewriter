import { Component } from 'react';
import client from '../config/auth';

export default class LoginRedirect extends Component {
  componentWillMount = () => {
    window.location.assign(client.token.getUri());
  }

  render = () => null;
}
