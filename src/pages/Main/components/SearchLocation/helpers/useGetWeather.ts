import { getWeather } from '../../../../../services/weatherAPI/hands';
import { useFetch } from '../../../../../services/useFetch';
import { useWeatherContext } from '../../../../../context/weatherContext';
import { GeocodingResponse } from '../../../../../types';

type Props = {
	geoData?: GeocodingResponse;
};

export const useGetWeather = ({ geoData }: Props) => {
	const { handleSetToday } = useWeatherContext();

	const { latitude, longitude } = geoData || {};

	const onSuccess = (data: any) => {
		console.log('data 1: ', data);
		handleSetToday(data);
	};

	const enable = !!latitude && !!longitude;

	const { data } = useFetch({
		fetch: () => getWeather({ latitude, longitude }),
		depends: [latitude, longitude],
		onSuccess,
		enable,
	});

	console.log('data 2: ', data);
	return {
		weatherData: data,
	};
};
