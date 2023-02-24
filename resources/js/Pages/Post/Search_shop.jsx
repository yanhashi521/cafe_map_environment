import React from "react";
import { useEffect, useRef } from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Places from "./Places";
import { useState, useMemo } from "react";;
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";



const Search_shop = (props) => {
    const center = { lat: 35.65818207396587, lng: 139.70166798416372 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };
    const input = document.getElementById("pac-input");
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: "us" },
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
      types: ["cafe"],
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    
    
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    店名・駅名
                </h2>
            }>
            <div className="inline-grid grid-cols-5 gap-10 text-lg">
                <div className="container mx-auto my-4 px-4">
                    <Link href="/top">＜戻る</Link>
                </div>
            </div>
            <div className="p-12">
                
                <div className="container mx-auto my-4 px-4 ">
                {/*<script type="module" src="./Places.js"></script>*/}
                    <PlacesAutocomplete setSelected={setSelected}/>
                </div>
            </div>
            
        </Authenticated>
        );
}
//const [selected, setSelected] = useState();
/*const PlacesAutocomplete = ({ setSelected }) => {
  
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    
  };
  function geocode() {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({address: place}, (results, status) => {
            if (status === 'OK') {
                setLat(results[0].geometry.location.lat()),
                setLng(results[0].geometry.location.lng());
            }
            //console.log(lat);
        });
    }


  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};*/

export default Search_shop;