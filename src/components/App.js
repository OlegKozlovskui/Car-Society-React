import React, { Fragment } from 'react';
import { Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SignIn from './auth/SignIn/SignIn';
import SignUp from './auth/SignUp/SignUp';
import Profile from './profile/Profile/Profile';
import Header from './layout/Header/Header';
import history from '../utils/history';
import PublicRoute from './protected-routes/PublicRoute';
import PrivateRoute from './protected-routes/PrivateRoute';

const App = ({ isAuthenticated }) => (
  <Router history={history}>
    <Fragment>
	    {isAuthenticated && <Header />}
      <Switch>
        <PublicRoute exact path="/" component={SignIn} />
        <PublicRoute exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </Fragment>
  </Router>
);

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
