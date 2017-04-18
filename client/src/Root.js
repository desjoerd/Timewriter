import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Route } from 'react-router';

import App from './App';
import LoginHandler from './components/LoginHandler';


export default ({ Router }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router>
      <div>
        <Route path="" component={App} />
        <Route path="/login" component={LoginHandler} />
      </div>
    </Router>
  </MuiThemeProvider>
);