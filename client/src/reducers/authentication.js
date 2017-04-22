import { combineReducers } from 'redux'

const isAuthenticated = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN_CALLBACK':
      return !!action.accessToken;
    default: 
      return state;
  }
}

const authentication = combineReducers({
  isAuthenticated,
});

export default authentication;
