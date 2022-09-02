import { WeatherClient } from './Client';
import { getWeatherPayload } from '../../types';

export const getWeather = async ({
	latitude,
	longitude,
}: getWeatherPayload) => {
	try {
		const data = await WeatherClient.get(
			`/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
		);

		return data.data;
	} catch (err) {
		console.error(err);
	}
};
