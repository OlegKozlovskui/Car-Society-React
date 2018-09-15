import { call, put } from 'redux-saga/effects';
import history from "../../utils/history";
import setAuthToken from "../../utils/setAuthToken";

import api from '../../api/api';
import { setCurrentUser } from '../actionts/authActions';

export function* createUserSaga(action) {
	try {
		console.log('Action', action);
		const user = yield call(api.user.signup, action.user);
		console.log('USER', user);
		localStorage.accessToken = user.accessToken;
		localStorage.refreshToken = user.refreshToken;
		setAuthToken(user.accessToken);
		yield put(setCurrentUser(user));
		history.push("/profile");
	} catch (e) {
		console.log(e)
	}
}