import axios from 'axios';

const geoToken = process.env.REACT_APP_GEO_TOKEN;

const GeoClient = axios.create({
	baseURL: 'https://api.api-ninjas.com/v1',
	headers: {
		'X-Api-Key': `${geoToken}`,
	},
});

export { GeoClient };
