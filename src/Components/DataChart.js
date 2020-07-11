import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function DataChart(props){

	const [chartData, setChartData] = useState({});
	useEffect(()=>{
		async function fetchData()
		{
			const response = await fetch(`https://disease.sh/v3/covid-19/historical/${props.selectedCountry}?lastdays=all`);
			let responseObj = await response.json();
			//console.log(data);
			let data = responseObj;
			if(props.selectedCountry !== 'all') data = responseObj.timeline;

			let dataObj = Object.keys(data.cases).map(	
				(key) => ({ 
					cases: data.cases[key], 
					deaths: data.deaths[key], 
					recovered: data.recovered[key], 
					date: key 
				}) 
			);
			//console.log(dataObj); // {confirmed: 555, deaths: 17, date: "2020-01-22"}

			let chartDataObj = {
				labels: dataObj.map( ({ date }) => date ),
				datasets: [
					{
						data: dataObj.map((data) => data.cases),
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true,
					}, {
						data: dataObj.map((data) => data.deaths),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255, 0, 0, 0.5)',
						fill: true,
					}, {
						data: dataObj.map((data) => data.recovered),
						label: 'Recovered',
						borderColor: 'green',
						backgroundColor: 'rgba(0, 128, 0, 0.5)',
						fill: true,
					},
				]
			}
			//console.log(chartDataObj);

			setChartData(chartDataObj);
		}
		fetchData();

	}, [props.selectedCountry]);

	return (
		<div className="chart">
			<h2>Covid-19 Historical Data</h2>
			<Line data={chartData} />
		</div>
	);
}