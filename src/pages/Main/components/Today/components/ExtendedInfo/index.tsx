import { useWeatherContext } from '../../../../../../context/weatherContext';
import { ExtendedInfoItem } from './components';
import { getTimeIndex } from '../../../../../../services/getTime';

import styles from './index.module.scss';

interface Props {}
export interface Item {
	name: string;
	value: string;
}

export const ExtendedInfo = (props: Props) => {
	const { today } = useWeatherContext();
	console.log(today);

	const timeIndex = getTimeIndex(today?.hourly.time);
	console.log('TimeInfrx: ', timeIndex);

	const items: Item[] = [
		{
			name: 'Вероятность осадков',
			value: 15 + ' %',
		},
		{
			name: 'Влажность',
			value: Math.floor(today?.hourly.relativehumidity_2m[timeIndex]) + ' %',
		},
		{
			name: 'Давление',
			value: Math.floor(today?.hourly.pressure_msl[timeIndex]) + ' мм',
		},
		{
			name: 'Осадки',
			value: Math.floor(today?.hourly.precipitation[timeIndex]) + ' мм',
		},
		{
			name: 'Ветер',
			value: Math.floor(today?.hourly.windspeed_10m[timeIndex]) + ' м/с',
		},
	];

	const getItemKey = (item: Item) => item.name + item.value;

	return (
		<ul className={styles.root}>
			{items.map((item) => (
				<ExtendedInfoItem item={item} key={getItemKey(item)} />
			))}
		</ul>
	);
};
