import { createContext, ReactNode, useContext, useState } from 'react';

import { OPTION_DEFAULT_VALUE } from '../consts';

type WeatherContextType = {
	today: any | unknown;
	handleSetToday: (newToday: unknown) => void;
	city: string;
	handleSetCity: (newCity: string) => void;
};

const WeatherContext = createContext<WeatherContextType | null>(null);

type Props = {
	children: ReactNode;
};

export const WeatherContextProvider = ({ children }: Props): JSX.Element => {
	const [today, setToday] = useState<unknown>();

	const handleSetToday = (newToday: unknown) => {
		setToday(newToday);
	};

	const [city, setCity] = useState<string>(OPTION_DEFAULT_VALUE.value);

	const handleSetCity = (newCity: string) => {
		setCity(newCity);
	};

	return (
		<WeatherContext.Provider
			value={{
				today,
				handleSetToday,
				city,
				handleSetCity,
			}}>
			{children}
		</WeatherContext.Provider>
	);
};

export const useWeatherContext = (): WeatherContextType => {
	const context = useContext(WeatherContext);

	if (context === null) {
		throw new Error('WeatherContext context must be inside values');
	}

	return context;
};
