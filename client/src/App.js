import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';
import { authRedirect } from './api/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthLoading: false,
      isAuthenticated: false,
    };
  }

  componentWillMount = () => {
  }

  componentDidMount = () => {
    console.log(this.props.location)
    console.log(this.props.match)
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="Timewriter"
          showMenuIconButton={false}
        />
        <div className="Content">
          {this.renderSwitch()}
        </div>
      </div>
    );
  }

  renderSwitch = () => {
    if (this.state.isAuthenticated) {
      return (<RaisedButton onClick={this.logout} label="logout"></RaisedButton>);
    } else {
      return (<RaisedButton onClick={this.authorize} label="Authorize" />);
    }
  }

  authorize = () => {
    authRedirect();
  }

  logout = () => {
    window.location.assign('https://login.windows.net/common/oauth2/logout?post_logout_r‌​edirect_uri=http://localhost:3000');
  }
}

export default App;
