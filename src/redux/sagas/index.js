import { takeLatest, takeEvery } from 'redux-saga/effects';

import { SIGN_UP, SIGN_IN, SIGN_OUT, GOOGLE_LOGIN, FACEBOOK_LOGIN, FETCH_CURRENT_USER } from '../types/types';
import { signUpSaga, signInSaga, signOutSaga, googleLoginSaga, facebookLoginSaga } from './authSagas';
import { fetchCurrentUserSaga } from './userSagas';

export default function* rootSaga() {
	yield takeLatest(SIGN_UP, signUpSaga);
	yield takeLatest(SIGN_IN, signInSaga);
	yield takeEvery(SIGN_OUT, signOutSaga);
	yield takeLatest(GOOGLE_LOGIN, googleLoginSaga);
	yield takeLatest(FACEBOOK_LOGIN, facebookLoginSaga);
	yield takeLatest(FETCH_CURRENT_USER, fetchCurrentUserSaga);
}