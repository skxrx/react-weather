export type GeocodingResponse = {
	country: string;
	latitude: number;
	longitude: number;
	name: string;
	state: string;
};

export type getWeatherPayload = {
	latitude: number | undefined;
	longitude: number | undefined;
};
