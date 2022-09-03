import { useState } from 'react';
import Select from 'react-select/creatable';

import { OPTIONS } from '../../../../consts/index';

import { useGetWeather, useGetGeocoding } from './helpers';

export const SearchLocation = () => {
	const [searchValue, setSearchValue] = useState(OPTIONS[0]);
	const city = searchValue.value;

	const handleChange = async (obj: any) => {
		setSearchValue(obj);
	};

	const { geoData } = useGetGeocoding({ city });

	useGetWeather({ geoData: geoData?.[0], city });

	return (
		<div>
			<Select value={searchValue} options={OPTIONS} onChange={handleChange} />
			<br></br>

			<span>Selected value: {searchValue.value}</span>
		</div>
	);
};
