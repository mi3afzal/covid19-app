import React from 'react';
import GoogleMapReact from 'google-map-react';


export default function Map(props){
    
	return (
		<div className="mapdiv">
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDA2XZpc1KLdejhrkPS2sKeMVU0G-X9TAQ' }}
            defaultCenter={{lat: 30, lng: 70}}
            defaultZoom={6}
            >
                {props.countries.length > 0 && props.countries.map( (cData, index)=>{
                    return (
                        <div lat={cData.countryInfo.lat} lng={cData.countryInfo.long} className="marker">
                            <img src={cData.countryInfo.flag} title={cData.country} alt={cData.country} />
                            <br /> {cData.country} <br />
                            Active: {cData.active}
                        </div>
                    );
                } )}
                
            </GoogleMapReact>
        </div>
	);
}