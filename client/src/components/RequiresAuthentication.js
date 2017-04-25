import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginRedirect from '../components/LoginRedirect';
import { isAuthenticated, isSessionLoading } from '../reducers'
import { sessionLoaded } from '../actions/session';

class RequiresAuthentication extends Component {

  componentDidMount = () => {
    const { isLoading, dispatch } = this.props;

    if(isLoading) {
      const accessToken = window.sessionStorage.getItem('accessToken');
      dispatch(sessionLoaded({
        accessToken
      }));
    }
  }

  render = () => {
    const { isAuthenticated, isLoading, children } = this.props;
    if (isAuthenticated) {
      return children;
    }
    else if (isLoading) {
      return <p>Loading...</p>;
    }
    else {
      return <LoginRedirect />
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isAuthenticated: isAuthenticated(state),
  isLoading: isSessionLoading(state),
});

RequiresAuthentication = connect(mapStateToProps)(RequiresAuthentication)
export default RequiresAuthentication;

export const requiresAuthentication = (WrappedComponent) => (props) => (
  <RequiresAuthentication>
    <WrappedComponent {...props} />
  </RequiresAuthentication>
);
