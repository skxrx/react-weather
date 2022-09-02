import { GeoClient } from './Client';
import { GeocodingResponse } from '../../types';

export const getGeocoding = async (cityName: string) => {
	try {
		const data = await GeoClient.get<GeocodingResponse[]>(
			`/geocoding?city=${cityName}&country=RU`
		);

		return data.data;
	} catch (err) {
		console.error(err);
	}
};
