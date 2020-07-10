import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function DataChart(){

	const [chartData, setChartlData] = useState({});
	useEffect(()=>{
		async function fetchData()
		{
			const response = await fetch('https://covid19.mathdro.id/api/daily');
			let data = await response.json();
			console.log(data);
			
			let chart_data = data.map(	(obj) => ({ 
				confirmed: obj.confirmed.total, 
				deaths: obj.deaths.total, 
				date: obj.reportDate 
			}) );
			//console.log(chart_data); // {confirmed: 555, deaths: 17, date: "2020-01-22"}

			let chartObj = {
				labels: chart_data.map( ({ date }) => date ),
				datasets: [
					{
						data: chart_data.map((data) => data.confirmed),
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true,
					}, {
						data: chart_data.map((data) => data.deaths),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255, 0, 0, 0.5)',
						fill: true,
					},
				]
			}
			//console.log(chartObj);
			
			setChartlData(chartObj);
		}
		fetchData();
	}, []);

	return (
		<div className="chart">
			<h2>Covid-19 Historical Data</h2>
			<Line data={chartData} />
		</div>
	);
}