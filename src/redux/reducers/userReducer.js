import { SET_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS } from '../types/types';

const initialState = {
	userInfo: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				userInfo: action.payload
			};
		case FETCH_CURRENT_USER_SUCCESS:
			return {
				userInfo: action.payload
			};
		default:
			return state;
	}
}