import { FETCH_USER_PROFILE_SUCCESS } from '../types/types';

const initialState = {
	profile: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_USER_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload
			};
		default:
			return state;
	}
}