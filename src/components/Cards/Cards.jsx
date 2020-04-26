/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ data: { modifiedData } }) => {
	const today = new Date();
	const todayDate =
		today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	if (!modifiedData) {
		return (
			<div>
				<Grid container spacing={3} justify="center">
					<Grid item component={Card} xs={12} md={3} className="card infected">
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Infected
							</Typography>
							<Typography variant="h5">
								<CountUp
									start={0}
									end={0}
									duration={1.5}
									separator=","></CountUp>
							</Typography>
							<Typography color="textSecondary">
								{new Date(todayDate).toDateString()}
							</Typography>
							<Typography variant="body2">
								Number of active cases of COVID-19
							</Typography>
						</CardContent>
					</Grid>
					<Grid item component={Card} xs={12} md={3} className="card recovered">
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Recovered
							</Typography>
							<Typography variant="h5">
								<CountUp
									start={0}
									end={0}
									duration={1.5}
									separator=","></CountUp>
							</Typography>
							<Typography color="textSecondary">
								{new Date(todayDate).toDateString()}
							</Typography>
							<Typography variant="body2">
								Number of recoveries from COVID-19
							</Typography>
						</CardContent>
					</Grid>
					<Grid item component={Card} xs={12} md={3} className="card deaths">
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Deaths
							</Typography>
							<Typography variant="h5">
								<CountUp
									start={0}
									end={0}
									duration={1.5}
									separator=","></CountUp>
							</Typography>
							<Typography color="textSecondary">
								{new Date(todayDate).toDateString()}
							</Typography>
							<Typography variant="body2">
								Number deaths caused by COVID-19
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</div>
		);
	}
	return (
		<div>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className="card infected">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={modifiedData.confirmed}
								duration={1.5}
								separator=","></CountUp>
						</Typography>
						<Typography color="textSecondary">
							{new Date(modifiedData.date).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className="card recovered">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={modifiedData.recovered}
								duration={1.5}
								separator=","></CountUp>
						</Typography>
						<Typography color="textSecondary">
							{new Date(modifiedData.date).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className="card deaths">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={modifiedData.deaths}
								duration={1.5}
								separator=","></CountUp>
						</Typography>
						<Typography color="textSecondary">
							{new Date(modifiedData.date).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number deaths caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
