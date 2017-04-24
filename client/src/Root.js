import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Switch, Route } from 'react-router';

import App from './App';
import LoginHandler from './components/LoginHandler';


export default ({ Router }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router>
      <Switch>
        <Route path="/login" component={LoginHandler} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);