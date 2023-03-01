import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


export default function GoogleMap_show() {
    const [place,setPlace] = useState();
    const [lat,setLat] = useState(35.65818207396587);
    const [lng,setLng] = useState(139.70166798416372);//初期値は渋谷

    const changeLocationName = (event) => {
    
        if (event.key === 'Enter') {
            geocode();
            return;
        }
        setPlace(event.target.value);
    }
    
    function geocode() {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({address: place}, (results, status) => {
            console.log(results);
            if (status === 'OK') {
                setLat(results[0].geometry.location.lat()),
                setLng(results[0].geometry.location.lng());
            }
            //console.log(lat);
        });
    }
    const containerStyle = {
        width: "80%",
        height: "100vh",
    };

    const center = {
        lat: 35.65818207396587, 
        lng: 139.70166798416372,
    };
    
    
    return (
        <React.Fragment>
            
            <div>
                <div className="container mx-auto my-4">
                    <input type="text" onKeyDown={(event) => changeLocationName(event)}/>
                </div>
                
                <LoadScript googleMapsApiKey="AIzaSyDBKCPRHFueXbnw-e9fBAXc1dDPjgHgNEE">
                    <GoogleMap 
                        mapContainerStyle={containerStyle}
                        center={{
                            lat: Number(lat),
                            lng: Number(lng),
                        }}
                        zoom={14}
                    >
                        <Marker position={{
                            lat: Number(lat),
                            lng: Number(lng),
                        }}/>
                    </GoogleMap>
                </LoadScript>
                
                <p>緯度：{lat}</p>
                <p>軽度：{lng}</p>
            </div>
        </React.Fragment>
    );
}