import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

export default function CountrySelector(props) {

	return (
		<FormControl className="countrySelector">
			<NativeSelect defaultValue="" onChange={(e) => props.setSelectedCountry(e.target.value)}>
				<option value="all">All Countries</option>
				{props.countries.map((country, i) => <option key={i} value={country.iso3}>{country.country}</option>)}
			</NativeSelect>
		</FormControl>
	);
};