import { SIGN_UP, SIGN_IN, SIGN_OUT, GOOGLE_LOGIN, FACEBOOK_LOGIN } from '../types/types';

export const signUp = user => ({
	type: SIGN_UP,
	user
});

export const signIn = credentials => ({
	type: SIGN_IN,
	credentials
});

export const googleLogin = credentials => ({
	type: GOOGLE_LOGIN,
	credentials
});

export const facebookLogin = credentials => ({
	type: FACEBOOK_LOGIN,
	credentials
});

export const signOut = () => ({
	type: SIGN_OUT,
});


