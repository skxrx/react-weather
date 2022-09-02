import styles from './index.module.scss';

import { BasicInfo, CommonInfo, ExtendedInfo } from './components';
type Props = {};

export const Today = (props: Props) => {
	return (
		<div className={styles.info}>
			<BasicInfo />

			<CommonInfo />

			<ExtendedInfo />
		</div>
	);
};
