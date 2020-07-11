import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './Components/Header';
import CountrySelector from './Components/CountrySelector';
import DataCards from './Components/DataCards';
import DataChart from './Components/DataChart';
import Map from './Components/Map';
import Footer from './Components/Footer';


function App() {

	

	const [countriesStats, setCountriesStats] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const response = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=false');
			let data = await response.json();
			//console.log(data);
			setCountriesStats(data);
		};
		fetchAPI();
	}, []);

	const [selectedCountry, setSelectedCountry] = useState('all');

	return (
		<div className="app">
			<Header />
			<CountrySelector countries={countriesStats} setSelectedCountry={setSelectedCountry} />
			<DataCards selectedCountry={selectedCountry} />
			<DataChart selectedCountry={selectedCountry} />
			<Map countries={countriesStats} />
			<Footer />
		</div>
	);
}

export default App;
