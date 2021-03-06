import { SET_CURRENT_USER, USER_SIGNED_OUT } from '../types/types';

const initialState = {
	isAuthenticated: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				isAuthenticated: true,
			};
		case USER_SIGNED_OUT:
			return {
				isAuthenticated: false,
			};
		default:
			return state;
	}
}