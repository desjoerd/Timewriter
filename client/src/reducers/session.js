import { combineReducers } from 'redux'
import * as actions from '../actions/session';

const accessToken = (state = null, action) => {
  console.log(action, state);
  switch (action.type) {
    case actions.HANDLE_LOGIN:
      return action.user.accessToken;
    case actions.SESSION_LOADED:
      return action.session.accessToken;
    default:
      return state;
  }
}

const isLoading = (state = true, action) => {
  switch (action.type) {
    case actions.SESSION_LOADED:
    case actions.HANDLE_LOGIN:
      return false;
    default:
      return state;
  }
}

const session = combineReducers({
  accessToken,
  isLoading,
});

export default session;

export const isAuthenticated = (state) => !!state.accessToken;
export const isSessionLoading = (state) => state.isLoading;
