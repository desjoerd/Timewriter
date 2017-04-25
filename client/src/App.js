import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Switch, Route } from 'react-router';

import Shell from './components/Shell';
import { requiresAuthentication } from './components/RequiresAuthentication';
import LoginHandler from './components/LoginHandler';

import './App.css';

export default ({ Router }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router>
      <Switch>
        <Route path="/login" component={LoginHandler} />
        <Route path="/" component={requiresAuthentication(Shell)} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);
