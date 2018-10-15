import {
  FETCH_ALL_CARS,
  FETCH_ALL_CARS_SUCCESS,
  FETCH_CAR,
  FETCH_CAR_SUCCESS,
  CREATE_CAR,
  UPDATE_CAR,
  DELETE_CAR,
} from '../types/types';

export const fetchAllCars = () => ({
  type: FETCH_ALL_CARS
});

export const fetchAllCarsSuccess = cars => ({
  type: FETCH_ALL_CARS_SUCCESS,
  cars
});

export const createCar = car => ({
	type: CREATE_CAR,
	car,
});

