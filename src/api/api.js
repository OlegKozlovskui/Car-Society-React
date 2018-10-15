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
	},
  brand: {
    createBrand: brand => {
      const { brandName, brandImg } = brand;
      const data  = new FormData();

      data.append('name', brandName);
      data.append('imageSrc', brandImg);
     return axios.post(`${config.API_URL}brands`, data ).then(res => res.data);
    },
  },
  car: {
    fetchAllCars: () =>
      axios.get(`${config.API_URL}cars`).then(res => res.data),
    createCar: car => {
      const { brand, model, year, maxSpeed, power, price, imageSrc } = car;
      const data  = new FormData();

      data.append('brand', brand);
      data.append('model', model);
      data.append('year', year);
      data.append('maxSpeed', maxSpeed);
      data.append('power', power);
      data.append('price', price);
      data.append('imageSrc', imageSrc);
      return axios.post(`${config.API_URL}cars`, data ).then(res => res.data);
    },
  }
}