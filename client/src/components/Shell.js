import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class Shell extends Component {

  render() {
    
    return (
      <div className="Shell">
        <AppBar
          title="Timewriter"
          showMenuIconButton={false}
        />
        <div className="Content">
          <RaisedButton onClick={this.logout} label="logout"></RaisedButton>
        </div>
      </div>
    );
  }

  logout = () => {
    window.location.assign('https://login.windows.net/common/oauth2/logout?post_logout_r‌​edirect_uri=http://localhost:3000');
  }
}

export default Shell;
