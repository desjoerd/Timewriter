import React, { Component } from 'react';
import './App.css';
import { authRedirect, authCallback } from './api/auth';
import { secure } from './api/ping';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isAuthenticated: false,
    };
  }

  componentWillMount = () => {
  }

  componentDidMount = () => {
    authCallback(window.location.href)
      .then((user) => {
        if(user.accessToken) {
          this.setState({
            isAuthenticated: true,
          });

          secure()
            .then((response) => {
              this.setState({
                ...this.state,
                date: response
              });
            });
        }
      });
  }

  render() {
    const { date } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        {this.renderSwitch()}
        <p className="App-intro">
          {date}
        </p>
      </div>
    );
  }

  renderSwitch = () => {
    if(this.state.isAuthenticated) {
      return (<button onClick={this.logout}>logout</button>);
    } else {
      return (<button onClick={this.authorize}>authorize</button>);
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
