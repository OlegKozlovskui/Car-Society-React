import { call, put } from 'redux-saga/effects';

import api from '../../api/api';
import { fetchUserProfileSuccess } from '../actionts/profileActions';

export function* fetchUserProfileSaga() {
	const profile = yield call(api.profile.fetchUserProfile);
	yield put(fetchUserProfileSuccess(profile));
}