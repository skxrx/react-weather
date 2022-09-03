import { DATE_OPTIONS, TIME_OPTIONS } from '../../../../../../consts';
import { useWeatherContext } from '../../../../../../context/weatherContext';

import styles from './index.module.scss';

export const BasicInfo = () => {
	const { today, city } = useWeatherContext();

	const date = new Date();

	return (
		<div className={styles.main__info}>
			<div className={styles.this__location}>{city || ''}</div>
			<div className={styles.this__info}>
				Сегодня, {date.toLocaleString('ru', DATE_OPTIONS)}
			</div>
			<div className={styles.this__time}>
				{date.toLocaleString('ru', TIME_OPTIONS)}
			</div>
		</div>
	);
};
