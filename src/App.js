import React from 'react';
import './App.css';
import Header from './Components/Header';
import DataCards from './Components/DataCards';
import DataChart from './Components/DataChart';
import Map from './Components/Map';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="app">
			<Header />
			<DataCards />
			<DataChart />
			<Map />
			<Footer />
		</div>
	);
}

export default App;
