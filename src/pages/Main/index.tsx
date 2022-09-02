import { Today, SearchLocation } from './components';

import { WeatherContextProvider } from '../../context/weatherContext';

import styles from './index.module.scss';

export const Main = () => {
	return (
		<WeatherContextProvider>
			<div className={styles.root}>
				<Today />

				<SearchLocation />
			</div>
		</WeatherContextProvider>
	);
};
