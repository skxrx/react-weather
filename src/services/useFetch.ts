import { useEffect, useState } from 'react';

export const arrayIsEqual = (
	firstArray?: Array<any>,
	secondArray?: Array<any>
): boolean => {
	if (!(firstArray && secondArray)) {
		return false;
	}

	if (firstArray.length !== secondArray.length) {
		return false;
	}

	return firstArray.reduce(
		(prev, cur, index) => Boolean(prev && cur === secondArray[index]),
		true
	);
};

type Props<T> = {
	fetch: () => Promise<T>;
	depends: unknown[];
	onSuccess?: (data: T) => void;
	enable?: boolean;
};
export const useFetch = <T>({
	fetch,
	depends,
	onSuccess,
	enable,
}: Props<T>) => {
	const [data, setData] = useState<T>();
	const [isFetching, setIsFetching] = useState(false);
	const [currentDep, setCurrentDep] = useState<unknown[]>(depends);

	const checkIsCorrectDepends = (): boolean =>
		depends.every((item) => item === undefined);

	const isEnable = enable !== undefined || enable ? enable : true;

	const handleFetch = async () => {
		try {
			const data = await fetch();
			setData(data);
			onSuccess?.(data);
		} catch (err) {
			console.error(err);
		} finally {
			setIsFetching(false);
		}
	};

	useEffect(() => {
		if ((arrayIsEqual(depends, currentDep) && data) || isFetching) return;
		setCurrentDep([...depends]);

		if (!checkIsCorrectDepends() || isEnable) {
			setIsFetching(true);
			handleFetch();
		}
	}, depends);

	return { data };
};
