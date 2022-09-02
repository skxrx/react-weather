import { useWetherContext } from '../../../../../../context/wetherContext';

import styles from './index.module.scss';

export const BasicInfo = () => {
	const { today } = useWetherContext();

	console.log(today);

	return (
		<div className={styles.main__info}>
			<div className={styles.this__location}>Санкт-Петербург</div>
			<div className={styles.this__info}>Такой-то день сейчас</div>
			<div className={styles.this__time}>12:42</div>
		</div>
	);
};
