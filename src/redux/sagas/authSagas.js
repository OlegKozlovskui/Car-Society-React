import { call, put } from 'redux-saga/effects';
import history from "../../utils/history";
import setAuthToken from "../../utils/setAuthToken";

import api from '../../api/api';
import { setCurrentUser, fetchCurrentUser } from '../actionts/userActions';
import { USER_SIGNED_OUT } from '../types/types';

function* authenticate(user) {
	localStorage.accessToken = user.accessToken;
	localStorage.refreshToken = user.refreshToken;
	setAuthToken(user.accessToken);
	yield put(setCurrentUser(user));
	yield put(fetchCurrentUser());
	history.push("/profile");
}

export function* signUpSaga(action) {
	try {
		const user = yield call(api.auth.signup, action.user);
		yield authenticate(user);
	} catch (e) {
		console.log(e)
	}
}

export function* signInSaga(action) {
	try {
		const user = yield call(api.auth.signin, action.credentials);
		yield authenticate(user);
	} catch (e) {
		console.log(e)
	}
}

export function* googleLoginSaga(action) {
	try {
		const user = yield call(api.auth.google, action.credentials);
		yield authenticate(user);
	} catch (e) {
		console.log(e)
	}
}

export function* facebookLoginSaga(action) {
	try {
		const user = yield call(api.auth.facebook, action.credentials);
		yield authenticate(user);
	} catch (e) {
		console.log(e)
	}
}

export function* signOutSaga() {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	setAuthToken();
	yield put({ type: USER_SIGNED_OUT });
}