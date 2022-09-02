import { createContext, ReactNode, useContext, useState } from 'react';

type WetherContextType = {
	today: unknown;
	handleSetToday: (newToday: unknown) => void;
};

const WetherContext = createContext<WetherContextType | null>(null);

type Props = {
	children: ReactNode;
};

export const WetherContextProvider = ({ children }: Props): JSX.Element => {
	const [today, setToday] = useState<unknown>();

	const handleSetToday = (newToday: unknown) => {
		setToday(newToday);
	};

	return (
		<WetherContext.Provider
			value={{
				today,
				handleSetToday,
			}}>
			{children}
		</WetherContext.Provider>
	);
};

export const useWetherContext = (): WetherContextType => {
	const context = useContext(WetherContext);

	if (context === null) {
		throw new Error('WetherContext context must be inside values');
	}

	return context;
};
