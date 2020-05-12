import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchDataGlobal, fetchDailyDataCountries } from '../src/api';

import coronaImage from './assets/image.png';

class App extends React.Component {
	state = {
		data: {},
		data2: {},
		country: '',
	};
	async componentDidMount() {
		const fetchedDataGlobal = await fetchDataGlobal();
		this.setState({ data: fetchedDataGlobal });
	}
	handleCountryChange = async (country) => {
		const fetchedDataGlobal = await fetchDataGlobal(country);
		const fetchedDailyDataCountries = await fetchDailyDataCountries(country);
		this.setState({
			data: fetchedDataGlobal,
			data2: fetchedDailyDataCountries,
			country: country,
		});
	};
	render() {
		const { data, data2, country } = this.state;
		return (
			<div className="columns is-centered has-text-centered is-multiline">
				<div className="column is-two-thirds is-centered">
					<a
						href="https://covid19api.com/"
						rel="noopener noreferrer"
						target="_blank">
						<img className="covidImage" src={coronaImage}></img>
					</a>
				</div>
				<div className="big">
					<div className="column is-full">
						<Cards data={data}></Cards>
					</div>
					<div className="countryPicker column is-full">
						<CountryPicker
							handleCountryChange={this.handleCountryChange}></CountryPicker>
					</div>
				</div>
				<div className="column is-full">
					<Chart data2={data2} country={country}></Chart>
				</div>
			</div>
		);
	}
}
export default App;
