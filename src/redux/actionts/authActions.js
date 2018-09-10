import { CREATE_USER } from '../types/types';
import { USER_LOGGED_IN } from '../types/types';

export const createUser = user => ({
	type: CREATE_USER,
	user
});

export const userLoggedIn = user => ({
	type: USER_LOGGED_IN,
	user
});