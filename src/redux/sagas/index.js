import { takeLatest } from 'redux-saga/effects';

import { CREATE_USER, FETCH_USER_PROFILE } from '../types/types';
import { createUserSaga } from '../sagas/usersSagas';
import { fetchUserProfileSaga } from '../sagas/profileSagas';

export default function* rootSaga() {
	yield takeLatest(CREATE_USER, createUserSaga);
	yield takeLatest(FETCH_USER_PROFILE, fetchUserProfileSaga);
}