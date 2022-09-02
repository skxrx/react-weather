import { getGeocoding } from '../../../../../services/geocodingAPI/hands';
import { useFetch } from '../../../../../services/useFetch';

type Props = {
	city: string;
};

export const useGetGeocoding = ({ city }: Props) => {
	const { data } = useFetch({
		fetch: () => getGeocoding(city),
		depends: [city],
	});

	return {
		geoData: data,
	};
};
