import { getWeather } from '../../../../../services/weatherAPI/hands';
import { useFetch } from '../../../../../services/useFetch';
import { useWetherContext } from '../../../../../context/wetherContext';
import { GeocodingResponse } from '../../../../../types';

type Props = {
	geoData?: GeocodingResponse;
};

export const useGetWeather = ({ geoData }: Props) => {
	const { handleSetToday } = useWetherContext();

	const { latitude, longitude } = geoData || {};

	const onSuccess = (data: any) => {
		handleSetToday(data);
	};

	const enable = !!latitude && !!longitude;

	console.log('enable', enable);
	const { data } = useFetch({
		fetch: () => getWeather({ latitude, longitude }),
		depends: [latitude, longitude],
		onSuccess,
		enable,
	});

	return {
		weatherData: data,
	};
};
