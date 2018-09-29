import { call, put } from 'redux-saga/effects';

import api from '../../api/api';
import { fetchCurrentUserSuccess } from '../actionts/userActions';

export function* fetchCurrentUserSaga() {
	const user = yield call(api.user.fetchCurrentUser);
	
	yield put(fetchCurrentUserSuccess(user));
}