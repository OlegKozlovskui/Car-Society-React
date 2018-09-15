import { call, put } from 'redux-saga/effects';
import history from "../../utils/history";
import setAuthToken from "../../utils/setAuthToken";

import api from '../../api/api';
import { setCurrentUser } from '../actionts/authActions';
import { USER_LOGGED_OUT } from '../types/types';

export function* createUserSaga(action) {
	try {
		const user = yield call(api.user.signup, action.user);
		localStorage.accessToken = user.accessToken;
		localStorage.refreshToken = user.refreshToken;
		setAuthToken(user.accessToken);
		yield put(setCurrentUser(user));
		history.push("/profile");
	} catch (e) {
		console.log(e)
	}
}

export function* loginUserSaga(action) {
	try {
		const user = yield call(api.user.signin, action.credentials);
		localStorage.accessToken = user.accessToken;
		localStorage.refreshToken = user.refreshToken;
		setAuthToken(user.accessToken);
		yield put(setCurrentUser(user));
		history.push("/profile");
	} catch (e) {
		console.log(e)
	}
}

export function* logoutUserSaga() {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	setAuthToken();
	yield put({ type: USER_LOGGED_OUT });
}