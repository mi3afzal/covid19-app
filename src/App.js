import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header';
import DataCards from './Components/DataCards';
import CountrySelector from './Components/CountrySelector';
import DataChart from './Components/DataChart';
import Map from './Components/Map';
import Footer from './Components/Footer';


function App() {
	const [country, setCountry] = useState();

	return (
		<div className="app">
			<Header />
			<DataCards />
			<CountrySelector country={country} setCountry={setCountry} />
			<DataChart />
			<Map />
			<Footer />
		</div>
	);
}

export default App;
