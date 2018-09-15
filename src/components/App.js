import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import store from '../redux/store/store';
import SignIn from './auth/SignIn/SignIn';
import SignUp from './auth/SignUp/SignUp';
import Profile from './profile/Profile/Profile';
import Header from './layout/Header/Header';
import history from '../utils/history';
import setAuthToken from '../utils/setAuthToken';

library.add(fab, faEnvelope);

if (localStorage.accessToken) {
	setAuthToken(localStorage.accessToken);
}

const App = () => (
	<Provider store={store}>
    <Router history={history}>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
	        <Route exact path="/profile" component={Profile} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
