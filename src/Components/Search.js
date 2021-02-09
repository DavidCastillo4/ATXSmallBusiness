//Search.js
import React, { useState, useContext } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Context } from '../Context/context';

export let Search = () => {
 let { state } = useContext(Context);
 let [place, setPlace] = useState('');
 let css = { width: '100%', height: '40px' };

 let handleSelect = async (value) => {
  let results = await geocodeByAddress(value);
  let latLng = await getLatLng(results[0]);
  setPlace(value);
  let id = Object.keys(state.companies).map(i => state.companies[i].id);
  let maxId = Math.max(...id);

  localStorage.setItem('placeHolder',
   JSON.stringify({
    id: maxId + 1
    , name: value
    , address: results[0].formatted_address
    , lat: latLng.lat
    , lng: latLng.lng
   }))
 };

 return (
  <PlacesAutocomplete value={place} onChange={setPlace} onSelect={handleSelect}>
   {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    <div style={{ height: '200px' }}  >

     <input {...getInputProps({ placeholder: 'Search Company' })} style={css} />

     <div>
      {loading ? <div>...loading</div> : null}

      {suggestions.map(suggestion => {
       let style = { backgroundColor: suggestion.active ? "#E9E6E6" : "#fff" };
       return (
        <div {...getSuggestionItemProps(suggestion, { style })}>
         {suggestion.description}
        </div>
       );
      })}
     </div>
    </div>
   )}
  </PlacesAutocomplete>
 );
};

