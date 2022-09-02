import styles from './index.module.scss';

import { Item } from '../..';

interface Props {
	item: Item;
}

export const ExtendedInfoItem = ({ item }: Props) => {
	const { name, value } = item;

	return (
		<li className={styles.item}>
			<span className={styles.item__name}>{name}</span>
			<span className={styles.item__value}>{value}</span>
		</li>
	);
};
