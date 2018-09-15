import { CREATE_USER, LOGIN_USER, SET_CURRENT_USER, LOGOUT_USER } from '../types/types';

export const createUser = user => ({
	type: CREATE_USER,
	user
});

export const loginUser = credentials => ({
	type: LOGIN_USER,
	credentials
});

export const setCurrentUser = user => ({
	type: SET_CURRENT_USER,
	payload: user
});

export const logout = () => ({
	type: LOGOUT_USER,
});