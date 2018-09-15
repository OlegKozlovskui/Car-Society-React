import { takeLatest, takeEvery } from 'redux-saga/effects';

import { CREATE_USER, LOGIN_USER, LOGOUT_USER, FETCH_USER_PROFILE } from '../types/types';
import { createUserSaga, loginUserSaga, logoutUserSaga } from '../sagas/usersSagas';
import { fetchUserProfileSaga } from '../sagas/profileSagas';

export default function* rootSaga() {
	yield takeLatest(CREATE_USER, createUserSaga);
	yield takeLatest(LOGIN_USER, loginUserSaga);
	yield takeEvery(LOGOUT_USER, logoutUserSaga);
	yield takeLatest(FETCH_USER_PROFILE, fetchUserProfileSaga);
}