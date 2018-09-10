import axios from "axios";

export default {
	user: {
		signup: user =>
			axios.post("http://localhost:5000/api/users/register", user).then(res => console.log(user) && res.data.user),
	}
}