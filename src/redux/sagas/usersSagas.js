import { call, put } from 'redux-saga/effects';

import api from '../../api/api';
import { userLoggedIn } from '../actionts/authActions';

export function* createUserSaga(action) {
	console.log('user', action);
	const user = yield call(api.user.signup, action.user);
	console.log('user', user);
	yield put(userLoggedIn(user));
}