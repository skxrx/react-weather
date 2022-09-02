import { Today, SearchLocation } from './components';

import { WetherContextProvider } from '../../context/wetherContext';

import styles from './index.module.scss';

export const Main = () => {
	return (
		<WetherContextProvider>
			<div className={styles.root}>
				<Today />

				<SearchLocation />
			</div>
		</WetherContextProvider>
	);
};
