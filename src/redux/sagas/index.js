import { takeLatest } from 'redux-saga/effects';

import { CREATE_USER } from '../types/types';
import { createUserSaga } from '../sagas/usersSagas';

export default function* rootSaga() {
	yield takeLatest(CREATE_USER, createUserSaga);
}