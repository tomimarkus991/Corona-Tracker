/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { fetchDailyDataGlobal } from '../../api';
import { Line } from 'react-chartjs-2';
const moment = require('moment');

const Chart = ({ data2, country }) => {
	const [dailyData, setDailyData] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyDataGlobal());
		};
		fetchAPI();
	}, []);
	if (country) {
		if (data2[0] == undefined) {
			return `Thankfully no cases yet in ${country}`;
		} else {
			const lineChart2 = data2[0] ? (
				<Line
					data={{
						labels: data2.map(({ date }) => moment(date).format('L')),
						datasets: [
							{
								data: data2.map(({ confirmed }) => confirmed),
								label: 'Infected',
								borderColor: '#3333ff',
								fill: true,
							},
							{
								data: data2.map(({ recovered }) => recovered),
								label: 'Recovered',
								borderColor: 'Green',
								backgroundColor: 'rgba(0, 255, 0, 0.5)',
								fill: true,
							},
							{
								data: data2.map(({ deaths }) => deaths),
								label: 'Deaths',
								borderColor: 'red',
								backgroundColor: 'rgba(255, 0, 0, 0.7)',
								fill: true,
							},
						],
						options: { legend: { display: true, labels: { fontSize: 30 } } },
					}}
				/>
			) : null;
			return <div className="container">{lineChart2}</div>;
		}
	} else {
		const lineChart = dailyData.length ? (
			<Line
				data={{
					options: {
						scales: {
							yAxes: [
								{
									ticks: {
										fontSize: 40,
									},
								},
							],
						},
					},
					labels: dailyData.map(({ date }) => moment(date).format('L')),
					datasets: [
						{
							data: dailyData.map(({ confirmed }) => confirmed),
							label: 'Infected',
							borderColor: '#3333ff',
							fill: true,
						},
						{
							data: dailyData.map(({ recovered }) => recovered),
							label: 'Recovered',
							borderColor: 'Green',
							backgroundColor: 'rgba(0, 255, 0, 0.5)',
							fill: true,
						},
						{
							data: dailyData.map(({ deaths }) => deaths),
							label: 'Deaths',
							borderColor: 'red',
							backgroundColor: 'rgba(255, 0, 0, 0.5)',
							fill: true,
						},
					],
				}}
			/>
		) : null;
		return <div className="container">{lineChart}</div>;
	}
};

export default Chart;
