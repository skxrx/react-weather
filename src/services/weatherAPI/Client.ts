import axios from 'axios';

const WeatherClient = axios.create({
	baseURL: 'https://api.open-meteo.com/v1/',
});

export { WeatherClient };
