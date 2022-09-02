import { createContext, ReactNode, useContext, useState } from 'react';

type WeatherContextType = {
	today: unknown;
	handleSetToday: (newToday: unknown) => void;
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

	return (
		<WeatherContext.Provider
			value={{
				today,
				handleSetToday,
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
