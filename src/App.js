import React from 'react';
import './App.css';
import Header from './Components/Header';
import DataCards from './Components/DataCards';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="app">
			<Header />
			<DataCards />

			<Footer />
		</div>
	);
}

export default App;
