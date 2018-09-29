import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './index.css';
import store from './redux/store/store';
import App from './components/App';
import { setCurrentUser, fetchCurrentUser } from './redux/actionts/userActions';
import setAuthToken from './utils/setAuthToken';

library.add(fab, faEnvelope);

if (localStorage.accessToken) {
	const { userId } = jwt_decode(localStorage.accessToken);
	
	setAuthToken(localStorage.accessToken);
	store.dispatch(setCurrentUser({ userId }));
	store.dispatch(fetchCurrentUser());
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
