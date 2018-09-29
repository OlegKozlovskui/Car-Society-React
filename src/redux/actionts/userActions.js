import { FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS, SET_CURRENT_USER } from '../types/types';

export const fetchCurrentUser = () => ({
	type: FETCH_CURRENT_USER,
});

export const fetchCurrentUserSuccess = user => ({
	type: FETCH_CURRENT_USER_SUCCESS,
	payload: user,
});

export const setCurrentUser = user => ({
	type: SET_CURRENT_USER,
	payload: user
});