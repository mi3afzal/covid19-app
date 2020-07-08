import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '50px',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},

	card: {
		minWidth: 275,
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
										{key.replace('_', ' ').toUpperCase()}
									</Typography>
									<Typography variant="h5" component="h2">
										{globalData[key]}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					);
				} )}
				<Grid item xs={12} md={3}>
					<Card className={classes.card}>
						<CardContent>
							<Typography className={classes.title} color="textSecondary" gutterBottom>
								Word of the Day
        					</Typography>
							<Typography variant="h5" component="h2">
								be - lent
        					</Typography>
							<Typography className={classes.pos} color="textSecondary">
								adjective
        					</Typography>
							<Typography variant="body2" component="p">
								well meaning and kindly.
          					<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={3}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
				<Grid item xs={12} md={3}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
				<Grid item xs={12} md={3}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
