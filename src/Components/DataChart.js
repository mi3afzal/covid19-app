import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'My First dataset',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

export default function DataChart(){

	const [chartData, setChartlData] = useState(data);
	useEffect(()=>{
		async function fetchData(run){
			if(run){
				const response = await fetch('https://thevirustracker.com/timeline/map-data.json');
				let data = await response.json();
				console.log(data);
				setChartlData(data);
			}
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