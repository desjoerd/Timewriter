import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import './App.css';
import LoginRedirect from './components/LoginRedirect';
import { isAuthenticated } from './reducers';

class App extends Component {
  componentWillMount = () => {
  }

  componentDidMount = () => {
    console.log('app mount', this.props);
    console.log(this.props.location);
    console.log(this.props.match);
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
    console.log(this.props);
    if (this.props.isAuthenticated) {
      return (<RaisedButton onClick={this.logout} label="logout"></RaisedButton>);
    } else {
      return (<LoginRedirect />);
    }
  }

  logout = () => {
    window.location.assign('https://login.windows.net/common/oauth2/logout?post_logout_r‌​edirect_uri=http://localhost:3000');
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  isAuthLoading: state.authentication.isLoading,
  isAuthenticated: isAuthenticated(state),
});

export default withRouter(connect(mapStateToProps)(App));
