import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '50px',
	},
	card: {
		minWidth: 275,
		textAlign: 'center',
	  },
	  title: {
		fontSize: 14,
	  },
}));

export default function DataCards() {
	const classes = useStyles();

	const [globalData, setGlobalData] = useState({});
	useEffect(()=>{
		async function fetchData(){
			const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
			let data = await response.json();

			delete data.results[0].source;
			console.log(data);
			setGlobalData(data.results[0]);
		}
		fetchData();
	}, []);

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>

				{Object.keys(globalData).map( (key, index) => {
					return (
						<Grid item xs={12} md={3} key={index}>
							<Card className={classes.card}>
								<CardContent>
									<Typography className={classes.title} color="textSecondary" gutterBottom>
										{key.replace(/_/g, ' ').toUpperCase()}
									</Typography>
									<Typography variant="h5" component="h2">
										{globalData[key]}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					);
				} )}

			</Grid>
		</div>
	);
}
