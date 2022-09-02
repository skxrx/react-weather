import { useState } from 'react';
import Select from 'react-select/creatable';

import { useGetWeather, useGetGeocoding } from './helpers';

type City = {
	value: string;
	label: string;
};

const options: City[] = [
	{ value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
	{ value: 'Москва', label: 'Москва' },
	{ value: 'Братск', label: 'Братск' },
];

export const SearchLocation = () => {
	const [searchValue, setSearchValue] = useState(options[0]);

	const handleChange = async (obj: any) => {
		setSearchValue(obj);
	};

	const { geoData } = useGetGeocoding({ city: searchValue.value });

	useGetWeather({ geoData: geoData?.[0] });

	return (
		<div>
			<Select value={searchValue} options={options} onChange={handleChange} />
			<br></br>

			<span>Selected value: {searchValue.value}</span>
		</div>
	);
};
