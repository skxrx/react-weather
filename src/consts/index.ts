export type City = {
	value: string;
	label: string;
};

export const OPTIONS: City[] = [
	{ value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
	{ value: 'Москва', label: 'Москва' },
	{ value: 'Братск', label: 'Братск' },
];

export const OPTION_DEFAULT_VALUE = OPTIONS[0];

export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
	month: 'long',
	day: 'numeric',
	weekday: 'long',
};

export const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
	hour: 'numeric',
	minute: 'numeric',
};
