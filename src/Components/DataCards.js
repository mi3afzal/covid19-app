import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '50px auto',
		width: '80%',
	},
	card: {
		
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
			<Grid container spacing={3} justify="center" alignItems="stretch">

				<Grid item xs={12} md={3}>
					<Card className={`${classes.card} confirmed`}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Confirmed</Typography>
							<Typography variant="h5" component="h2">{globalData.total_cases}</Typography>
							<Typography color="secondary">+{globalData.total_new_cases_today} New</Typography>
							<Typography variant="body2" component="p">Number of confirmed COVID-19 cases</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={3}>
					<Card className={`${classes.card} active`}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Active</Typography>
							<Typography variant="h5" component="h2">{globalData.total_active_cases}</Typography>
							<Typography color="secondary">{globalData.total_serious_cases} Critical</Typography>
							<Typography variant="body2" component="p">Number of active COVID-19 cases</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={3}>
					<Card className={`${classes.card} recovered`}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Recovered</Typography>
							<Typography variant="h5" component="h2">{globalData.total_recovered}</Typography>
							<Typography className="newRecoveries">+{globalData.total_unresolved} Unresolved</Typography>
							<Typography variant="body2" component="p">Number of recoveries from COVID-19</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={3}>
					<Card className={`${classes.card} confirmed`}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Deaths</Typography>
							<Typography variant="h5" component="h2">{globalData.total_deaths}</Typography>
							<Typography color="secondary">+{globalData.total_new_deaths_today} New</Typography>
							<Typography variant="body2" component="p">Number of deaths from COVID-19</Typography>
						</CardContent>
					</Card>
				</Grid>
				
			</Grid>
		</div>
	);
}
