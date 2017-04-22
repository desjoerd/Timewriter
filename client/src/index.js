import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './configureStore';
import Root from './Root';

import './index.css';

injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <Root Router={Router} />
  </Provider>,
  document.getElementById('root')
);
