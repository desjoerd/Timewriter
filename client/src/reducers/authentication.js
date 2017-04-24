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

const authentication = combineReducers({
  accessToken,
  isLoading,
});

export default authentication;

export const isAuthenticated = (state) => !!state.accessToken;
