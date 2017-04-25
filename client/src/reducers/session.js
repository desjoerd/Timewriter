import { combineReducers } from 'redux'

const accessToken = (state = null, action) => {
  console.log(action, state);
  switch (action.type) {
    case 'HANDLE_LOGIN':
      return action.user.accessToken;
    default:
      return state;
  }
}

const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'HANDLE_LOGIN':
      return !action.user.accessToken;
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
