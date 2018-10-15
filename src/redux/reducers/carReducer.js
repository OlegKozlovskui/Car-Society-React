import {
  FETCH_ALL_CARS,
  FETCH_ALL_CARS_SUCCESS,
  FETCH_CAR,
  FETCH_CAR_SUCCESS,
  CREATE_CAR,
  UPDATE_CAR,
  DELETE_CAR,
} from '../types/types';

const initialState = {
	carList: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_CARS_SUCCESS:
			return {
        carList: action.cars
			};
		default:
			return state;
	}
}