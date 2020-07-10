import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';


export default function Map(){

    const [mapData, setMapData] = useState({});
	useEffect(()=>{
		async function fetchData(){
			const response = await fetch('https://disease.sh/v3/covid-19/countries');
			let data = await response.json();
			console.log(data);
			setMapData(data);
		}
		fetchData();
    }, []);
    
	return (
		<div className="mapdiv">
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDA2XZpc1KLdejhrkPS2sKeMVU0G-X9TAQ' }}
            defaultCenter={{lat: 30, lng: 70}}
            defaultZoom={6}
            >
                {mapData.length > 0 && mapData.map( (cData, index)=>{
                    return (
                        <div lat={cData.countryInfo.lat} lng={cData.countryInfo.long} className="marker">
                            <img src={cData.countryInfo.flag} title={cData.country} alt={cData.country} />
                            <br /> {cData.country} <br />
                            Active: {cData.cases}
                        </div>
                    );
                } )}
                
            </GoogleMapReact>
        </div>
	);
}