import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import store from '../redux/store/store';
import SignIn from './auth/SignIn/SignIn';
import SignUp from './auth/SignUp/SignUp';
import Profile from './profile/Profile/Profile';

library.add(fab, faEnvelope);

const App = () => (
	<Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
