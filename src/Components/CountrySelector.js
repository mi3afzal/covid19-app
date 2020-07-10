import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

export default function CountrySelector(props) {

	const [countries, setCountries] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const response = await fetch('https://covid19.mathdro.id/api/countries');
			let data = await response.json();
			console.log(data);

			const countriesObj = data.countries.map( (country) => country.name );
			setCountries(countriesObj);
		};
		fetchAPI();
	}, []);

	return (
		<FormControl className="formControl">
			<NativeSelect defaultValue="" onChange={(e) => props.setCountry(e.target.value)}>
				<option value="">Global</option>
				{countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
			</NativeSelect>
		</FormControl>
	);
};