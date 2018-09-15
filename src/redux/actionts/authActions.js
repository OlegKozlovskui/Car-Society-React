import { CREATE_USER, SET_CURRENT_USER } from '../types/types';

export const createUser = user => ({
	type: CREATE_USER,
	user
});

export const setCurrentUser = user => ({
	type: SET_CURRENT_USER,
	payload: user
});