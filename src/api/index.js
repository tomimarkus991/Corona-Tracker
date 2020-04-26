import axios from 'axios';

const url = 'https://api.covid19api.com';
const url2 = 'https://covid19.mathdro.id/api';

export const fetchDataGlobal = async (country) => {
	if (country) {
		try {
			const { data } = await axios.get(`${url}/live/country/${country}`);
			const modifiedData = {
				confirmed: data[13].Confirmed,
				recovered: data[13].Recovered,
				deaths: data[13].Deaths,
				date: data[13].Date,
			};
			console.log(modifiedData);

			return { modifiedData };
		} catch (error) {
			return error;
		}
	} else {
		try {
			const { data } = await axios.get(url2);
			const modifiedData = {
				confirmed: data.confirmed.value,
				recovered: data.recovered.value,
				deaths: data.deaths.value,
				date: data.lastUpdate,
			};
			return { modifiedData };
		} catch (error) {
			return error;
		}
	}
};

export const fetchDailyDataGlobal = async () => {
	try {
		const { data } = await axios.get(`${url2}/daily`);
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			recovered: dailyData.recovered.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;
	} catch (error) {
		console.log('error fetching dailydata');
	}
};

export const fetchDailyDataCountries = async (country) => {
	try {
		const { data } = await axios.get(
			`https://api.covid19api.com/total/dayone/country/${country}`,
		);
		const modifiedCountryData = data.map((dailyCountryData) => ({
			confirmed: dailyCountryData.Confirmed,
			recovered: dailyCountryData.Recovered,
			deaths: dailyCountryData.Deaths,
			date: dailyCountryData.Date,
		}));

		return modifiedCountryData;
	} catch (error) {
		console.log('error fetching dailydata2');
	}
};

export const fetchCountries = async () => {
	try {
		const { data } = await axios.get(`${url}/countries`);
		return data.map((country) => country.Country).sort();
	} catch (error) {
		console.log('error fetching countries');
	}
};
