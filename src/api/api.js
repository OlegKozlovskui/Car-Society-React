import axios from "axios";

export default {
	user: {
		signup: user =>
			axios.post("http://localhost:5000/api/users/register", user).then(res => res.data),
		signin: credentials =>
			axios.post("http://localhost:5000/api/users/login", credentials).then(res => res.data),
	},
	profile: {
		fetchUserProfile: () =>
			axios.get("http://localhost:5000/api/profile").then(res => res.data),
	}
}