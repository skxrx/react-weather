import { getWeather } from '../../../../../services/weatherAPI/hands';
import { useFetch } from '../../../../../services/useFetch';
import { useWeatherContext } from '../../../../../context/weatherContext';
import { GeocodingResponse } from '../../../../../types';

type Props = {
	geoData?: GeocodingResponse;
	city: string;
};

export const useGetWeather = ({ geoData, city }: Props) => {
	const { handleSetToday, handleSetCity } = useWeatherContext();

	const { latitude, longitude } = geoData || {};

	const onSuccess = (data: any) => {
		handleSetToday(data);

		handleSetCity(city);
	};

	const enable = !!latitude && !!longitude;

	const { data } = useFetch({
		fetch: () => getWeather({ latitude, longitude }),
		depends: [latitude, longitude],
		onSuccess,
		enable,
	});

	if (data) Object.assign(data, geoData);

	return {
		weatherData: data,
	};
};
