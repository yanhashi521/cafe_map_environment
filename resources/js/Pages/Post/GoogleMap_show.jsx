import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMap_show() {
    
    const containerStyle = {
        width: "1000px",
        height: "600px",
    };

    const center = {
        lat: 35.65818207396587, 
        lng: 139.70166798416372,
    }
    
    const positionShibuya = {
        lat: 35.65818207396587, 
        lng: 139.70166798416372,
    }
    
    return (
        <LoadScript googleMapsApiKey="">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                <Marker position={positionShibuya}/>
            </GoogleMap>
        </LoadScript>
    );
}

