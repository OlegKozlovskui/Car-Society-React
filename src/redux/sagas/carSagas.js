import { call, put } from 'redux-saga/effects';

import api from '../../api/api';
import { fetchAllCarsSuccess } from '../actionts/carActions';

export function* createCarSaga(action) {
	try {
		yield call(api.car.createCar, action.car);
	} catch (e) {
		console.log(e)
	}
}

export function* fetchAllCarsSaga() {
  const cars = yield call(api.car.fetchAllCars);

  yield put(fetchAllCarsSuccess(cars));
}