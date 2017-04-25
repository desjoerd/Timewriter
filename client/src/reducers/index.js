import { combineReducers } from 'redux';

import session, * as fromSession from './session';

export default combineReducers({
  session,
});

export const isAuthenticated = (state) => 
  fromSession.isAuthenticated(state.session);

export const isSessionLoading = (state) =>
  fromSession.isSessionLoading(state.session);