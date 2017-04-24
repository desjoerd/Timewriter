import { combineReducers } from 'redux';

import authentication, * as fromAuthentication from './authentication';

export default combineReducers({
  authentication,
});

export const isAuthenticated = (state) => 
  fromAuthentication.isAuthenticated(state.authentication);
