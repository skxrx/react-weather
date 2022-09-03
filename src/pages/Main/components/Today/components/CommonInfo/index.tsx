import { ReactComponent as Icon } from '../../../../../../assets/partly_cloudy.svg';
import { useWeatherContext } from '../../../../../../context/weatherContext';
import { getTimeIndex } from '../../../../../../services/getTime';

import styles from './index.module.scss';

type Props = {};

export const CommonInfo = (props: Props) => {
	const { today } = useWeatherContext();

	const getTempLabel = (temp: number | string) =>
		temp > 0 ? `+${temp}°` : `${temp}`;

	const timeIndex = getTimeIndex(today?.hourly.time);

	const [currentTemp, apparentTemp] = [
		timeIndex ? Math.round(today?.hourly.temperature_2m[timeIndex]) : 'Miss',
		timeIndex
			? Math.round(today?.hourly.apparent_temperature[timeIndex])
			: 'Miss',
		,
	];
	return (
		<div className={styles.root}>
			<div>
				<Icon />
			</div>

			<div className={styles.temps}>
				<div className={styles.currentTemp}>
					{currentTemp !== 'Miss' ? getTempLabel(currentTemp) : 'Loading'}
				</div>

				<div className={styles.apparentTemp}>
					Ощущается &nbsp;
					{getTempLabel(
						apparentTemp !== 'Miss' ? getTempLabel(apparentTemp) : 'Loading'
					)}
				</div>
			</div>
		</div>
	);
};
