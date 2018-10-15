import { takeEvery } from 'redux-saga/effects';

import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  FETCH_CURRENT_USER,
  CREATE_BRAND,
  CREATE_CAR,
  FETCH_ALL_CARS
} from '../types/types';
import { signUpSaga, signInSaga, signOutSaga, googleLoginSaga, facebookLoginSaga } from './authSagas';
import { fetchCurrentUserSaga } from './userSagas';
import { createBrandSaga } from './brandSagas';
import { createCarSaga, fetchAllCarsSaga } from './carSagas';

export default function* rootSaga() {
	yield takeEvery(SIGN_UP, signUpSaga);
	yield takeEvery(SIGN_IN, signInSaga);
	yield takeEvery(SIGN_OUT, signOutSaga);
	yield takeEvery(GOOGLE_LOGIN, googleLoginSaga);
	yield takeEvery(FACEBOOK_LOGIN, facebookLoginSaga);
	yield takeEvery(FETCH_CURRENT_USER, fetchCurrentUserSaga);
  yield takeEvery(CREATE_BRAND, createBrandSaga);
  yield takeEvery(CREATE_CAR, createCarSaga);
  yield takeEvery(FETCH_ALL_CARS, fetchAllCarsSaga);
}