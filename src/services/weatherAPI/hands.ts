import { WeatherClient } from './Client';
import { getWeatherPayload } from '../../types';

export const getWeather = async ({
	latitude,
	longitude,
}: getWeatherPayload) => {
	try {
		const data = await WeatherClient.get(
			`/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,rain_sum,windspeed_10m_max&hourly=windspeed_10m,apparent_temperature,pressure_msl,relativehumidity_2m,precipitation,temperature_2m&timezone=auto`
		);

		return data.data;
	} catch (err) {
		console.error(err);
	}
};
