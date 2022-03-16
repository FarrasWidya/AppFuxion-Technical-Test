import React, { useState } from "react";
import PlaceAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./App.css";

function App() {

  const [address,setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({
    lat:null,
    long:null
  })

  const handleSelect = async (value) =>{
    const result = await geocodeByAddress(value)
    const latLng = await getLatLng(result[0])
    setAddress(value)
    setCoordinates(latLng)
  }
  return <div className="App">
    <PlaceAutoComplete value={address} onChange={setAddress} onSelect={handleSelect}>
  {
    ({getInputProps, suggestions, getSuggestionItemProps, loading}) => 
    <div>
      <p>Latitude: {coordinates.lat}</p>
      <p>Longitude: {coordinates.lng}</p>
      <input {...getInputProps({placeholder:'Type Address'})}/>
      
      <div>
      {loading? <div>....loading </div> : null}
      
      {suggestions.map((suggestions,i) =>{
        return <div key={i}>{suggestions.description}</div>
      } )}

      </div>
    </div>
  }
    </PlaceAutoComplete>
  </div>;
}

export default App;
