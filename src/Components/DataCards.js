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

export default function DataCards(props) {
	const classes = useStyles();

	const [cardsData, setCardsData] = useState({});
	useEffect(()=>{
		
		let url = 'https://disease.sh/v3/covid-19/all?yesterday=false&allowNull=false';
		if(props.selectedCountry !== 'all') url = `https://disease.sh/v3/covid-19/countries/${props.selectedCountry}?yesterday=false&strict=true&allowNull=false`;

		async function fetchData(){
			const response = await fetch(url);
			let data = await response.json();
			setCardsData(data);
		}
		fetchData();
	}, [props.selectedCountry]);

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify="center" alignItems="stretch">

				<Grid item xs={12} md={3}>
					<Card className={`${classes.card} confirmed`}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Confirmed</Typography>
							<Typography variant="h5" component="h2">{cardsData.cases}</Typography>
							<Typography color="secondary">+{cardsData.todayCases} New</Typography>
							<Typography variant="body2" component="p">Number of confirmed COVID-19 cases</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={3}>
					<Card className={`${classes.card} active`}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Active</Typography>
							<Typography variant="h5" component="h2">{cardsData.active}</Typography>
							<Typography color="secondary">{cardsData.critical} Critical</Typography>
							<Typography variant="body2" component="p">Number of active COVID-19 cases</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={3}>
					<Card className={`${classes.card} recovered`}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Recovered</Typography>
							<Typography variant="h5" component="h2">{cardsData.recovered}</Typography>
							<Typography className="newRecoveries">+{cardsData.todayRecovered} New</Typography>
							<Typography variant="body2" component="p">Number of recoveries from COVID-19</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={3}>
					<Card className={`${classes.card} confirmed`}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Deaths</Typography>
							<Typography variant="h5" component="h2">{cardsData.deaths}</Typography>
							<Typography color="secondary">+{cardsData.todayDeaths} New</Typography>
							<Typography variant="body2" component="p">Number of deaths from COVID-19</Typography>
						</CardContent>
					</Card>
				</Grid>
				
			</Grid>
		</div>
	);
}
