import moment from 'moment';

export const currentDateAndHour: string = moment(
	moment().format('YYYY-MM-DD') + 'T00:00:00.000Z'
).format('YYYY-MM-DDThh:mm');

export const getTimeIndex = (arr: []) => {
	if (arr && arr.length)
		return arr.findIndex((time: string) => time === currentDateAndHour);
	else return 1;
};
