import axios from 'axios';

import config from '../config/config';

export default {
	auth: {
		signup: user =>
			axios.post(`${config.API_URL}auth/signup`, user).then(res => res.data),
		signin: credentials =>
			axios.post(`${config.API_URL}auth/signin`, credentials).then(res => res.data),
		google: credentials =>
			axios.post(`${config.API_URL}auth/oauth/google`, credentials).then(res => res.data),
		facebook: credentials =>
			axios.post(`${config.API_URL}auth/oauth/facebook`, credentials).then(res => res.data),
	},
	user: {
		fetchCurrentUser: () =>
			axios.get(`${config.API_URL}users/current`).then(res => res.data),
	}
}