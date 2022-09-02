import styles from './index.module.scss';
import { ReactComponent as Icon } from '../../../../../../assets/partly_cloudy.svg';

type Props = {};

export const CommonInfo = (props: Props) => {
	const [currentTemp, sensitiveTemp] = [14, -17];

	const getTempLabel = (temp: number) => (temp > 0 ? `+${temp}°` : `${temp}°`);

	return (
		<div className={styles.root}>
			<div>
				<Icon />
			</div>

			<div className={styles.temps}>
				<div className={styles.currentTemp}>{getTempLabel(currentTemp)}</div>

				<div className={styles.sensitiveTemp}>
					Ощущается &nbsp;{getTempLabel(sensitiveTemp)}
				</div>
			</div>
		</div>
	);
};
