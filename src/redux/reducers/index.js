import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import carReducer from './carReducer';

export default combineReducers({
	auth: authReducer,
	user: userReducer,
  cars: carReducer,
});