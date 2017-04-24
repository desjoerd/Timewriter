import React from 'react';
import { connect } from 'react-redux';
import LoginRedirect from '../components/LoginRedirect';
import { isAuthenticated } from '../reducers'

let RequiresAuthentication = ({ isAuthenticated, isLoading, children }) => {
  if(isAuthenticated) {
    return children;
  }
  else if(isLoading) {
    return null;
  }
  else {
    return <LoginRedirect />
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isAuthenticated: isAuthenticated(state)
});

RequiresAuthentication = connect(mapStateToProps)(RequiresAuthentication)
export default RequiresAuthentication;

export const requiresAuthentication = (WrappedComponent) => (props) => (
  <RequiresAuthentication>
    <WrappedComponent {...props} />
  </RequiresAuthentication>
);
