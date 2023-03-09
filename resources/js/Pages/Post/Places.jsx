import React, { useState } from "react";
import {GoogleMap, Autocomplete, useLoadScript, Marker } from "@react-google-maps/api";
import Authenticated from "@/Layouts/AuthenticatedLayout";
const placesLibrary = ["places"];
import { Link, useForm } from '@inertiajs/react';

function Places(props) {
  const [lats,setLat] = useState(35.65818207396587);
  const [lngs,setLng] = useState(139.70166798416372);//初期値は渋谷
  const [searchResult, setSearchResult] = useState("Result: none");
  
  const {data, setData, post} = useForm({
        shop_name: "入力",
        lat: "",
        lng: "",
  })
  //console.log(shop_data.lat);
  
  const handleSendPosts = (e) => {
        e.preventDefault();
        post("/search_shop");
    }
  
  const containerStyle = {
        width: "100%",
        height: "100vh",
  };
  
  const center = {
        lat: Number(lats), 
        lng: Number(lngs),
  };
  
  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: placesLibrary
    
  });
  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      const name = place.name;
      const status = place.business_status;
      const formattedAddress = place.formatted_address;
      setLat(place.geometry.location.lat());
      setLng(place.geometry.location.lng());
      setData("lat" ,place.geometry.location.lat());
      setData("lng" ,place.geometry.location.lng());
      //console.log(`Name: ${name}`);
      //console.log(`Business Status: ${status}`);
      //console.log(`Formatted Address: ${formattedAddress}`);
    } else {
      alert("Please enter text");
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Authenticated auth={props.auth} header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            登録する店舗の検索
        </h2>
      }>
      <div className="Places">
        <div id="searchColumn" className="container mx-auto my-4 px-4">
          <div className="container mx-auto my-10">
            <Autocomplete
              
              onPlaceChanged={onPlaceChanged} 
              onLoad={onLoad}
              bounds={defaultBounds}
              restrictions={{ country: "jp" }}
              fields={["address_components", "geometry", "icon", "name"]}
              strictBounds={false}
              types={["cafe"]}
              >
              <input
                type="text"
                placeholder="地名を入力"
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`
                }}
                />
            </Autocomplete>
          </div>
          
          <form onSubmit={handleSendPosts}>
            <div>
              <button href={`/search_shop/${post.id}/create`} type="submit" onClick={() => {setData({lat: Number(lats) ,lng: Number(lngs), shop_name: "test"})}}>店舗をお気に入り登録する</button>
            </div>
          </form>
          
          <div>
              <Link href="/shop_list">お気に入り登録した店舗を確認する</Link>
          </div>
          
          <GoogleMap 
              mapContainerStyle={containerStyle}
              center={{
                  lat: Number(lats),
                  lng: Number(lngs),
              }}
              zoom={14}
          >
          <Marker position={{
              lat: Number(lats),
              lng: Number(lngs),
          }}/>
          </GoogleMap>
        </div>
      </div>
    </Authenticated>
  );
}

export default Places;
