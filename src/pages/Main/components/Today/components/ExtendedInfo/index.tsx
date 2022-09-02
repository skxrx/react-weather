import { ExtendedInfoItem } from './components';

import styles from './index.module.scss';

interface Props {}
export interface Item {
	name: string;
	value: string;
}

export const ExtendedInfo = (props: Props) => {
	const items: Item[] = [
		{
			name: 'Вероятность осадков',
			value: '14%',
		},
		{ name: 'Влажность', value: '38%' },
		{ name: 'Давление', value: '767мм' },
		{ name: 'Осадки', value: '0 мм' },
		{ name: 'Ветер', value: '2 м/с, ЮЗ' },
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
