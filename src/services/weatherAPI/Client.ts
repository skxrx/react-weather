import axios from 'axios';

console.log(process.env);

const WeatherClient = axios.create({
	baseURL: 'https://api.open-meteo.com/v1/',
});

export { WeatherClient };
