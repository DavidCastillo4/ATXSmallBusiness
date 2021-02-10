//Map.js
import React, { useState, useContext } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { Context } from '../Context/context';

let url = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='
let key = process.env.REACT_APP_key;

let Maps = () => {
 let [loc, setLoc] = useState(null);
 let { state } = useContext(Context);

 return (
  <GoogleMap
   defaultZoom={13}
   defaultCenter={{ lat: 30.267153, lng: -97.743057 }} >
   {state.companies.map(loc => (
    <Marker key={loc.id} position={{ lat: loc.lat, lng: loc.lng }}
     onClick={() => { setLoc(loc) }} />
   ))}
   {loc && (<InfoWindow position={{ lat: loc.lat, lng: loc.lng }}
    onCloseClick={() => { setLoc(null) }}>
    <div>{loc.name}</div>
   </InfoWindow>)}
  </GoogleMap>
 )
};

export let Map = () => {
 let WrappedMap = withScriptjs(withGoogleMap(Maps));
 return (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
   <div style={{ width: '1000px', height: '900px' }}>
    <WrappedMap
     googleMapURL={`${url}${key}`}
     loadingElement={<div style={{ height: '100%' }} />}
     containerElement={<div style={{ height: '100%' }} />}
     mapElement={<div style={{ height: '100%' }} />}
    />
   </div>
  </div>
 );
};
