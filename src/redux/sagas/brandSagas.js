import { call } from 'redux-saga/effects';

import api from '../../api/api';

export function* createBrandSaga(action) {
	try {
		yield call(api.brand.createBrand, action.brand);
	} catch (e) {
		console.log(e)
	}
}