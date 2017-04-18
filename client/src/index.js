import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './Root';

import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Root Router={Router} />,
  document.getElementById('root')
);
