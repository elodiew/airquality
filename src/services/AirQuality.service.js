import { config } from '@/config/config.js';

import axios from 'axios';

const baseUrl = 'http://api.waqi.info/feed';

export const AirQualityService = {
	async getAirQuality(cityName) {
		const url = `${baseUrl}/${cityName}/?token=${config.token}`;

		try {
			const result = await axios.get(url);
			if (result.data.status === 'error') {
				return undefined;
			} else return result.data.data;
		} catch (error) {
			alert('erreur !');
			console.log('error', error);
		}
	},
};
