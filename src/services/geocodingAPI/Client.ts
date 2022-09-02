import axios from 'axios';

const geoToken = process.env.REACT_APP_GEO_TOKEN;

console.log(process.env);

const GeoClient = axios.create({
	baseURL: 'https://api.api-ninjas.com/v1',
	headers: {
		'X-Api-Key': `${geoToken}`,
	},
});

export { GeoClient };
