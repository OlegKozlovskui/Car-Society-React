import { FETCH_USER_PROFILE, FETCH_USER_PROFILE_SUCCESS } from '../types/types';

export const fetchUserProfile = () => ({
	type: FETCH_USER_PROFILE,
});

export const fetchUserProfileSuccess = profile => ({
	type: FETCH_USER_PROFILE_SUCCESS,
	payload: profile,
});