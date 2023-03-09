import React, { useState } from "react";
import {GoogleMap, Autocomplete, useLoadScript, Marker } from "@react-google-maps/api";
import Authenticated from "@/Layouts/AuthenticatedLayout";
const placesLibrary = ["places"];
import { Link, useForm } from '@inertiajs/react';


const Show_list = (props) => {
    const { favoriteShops } = props; //propsの中のfavoriteShopだけを持って行ってる．
    console.log(props);
    
    const containerStyle = {
        width: "70%",
        height: "40vh",
    };
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
        libraries: placesLibrary
    });
    
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ショップリスト
                </h2>
            }>
            
            <h2 className="container mx-auto my-10 px-4">お気に入り店舗一覧</h2>
            
            <div className="inline-grid grid-cols-1 gap-10 text-lg container mx-auto my-20 px-20">
                
                <div className="p-12">
                    
                    { favoriteShops.map((favoriteShop) => (
                        <div key={favoriteShop.id}>
                            <h2>{favoriteShop.shop_name}</h2>
                        <GoogleMap 
                            mapContainerStyle={containerStyle}
                            center={{
                                lat: Number(favoriteShop.lat),
                                lng: Number(favoriteShop.lng),
                            }}
                            zoom={15}
                        >
                            <Marker position={{
                                lat: Number(favoriteShop.lat),
                                lng: Number(favoriteShop.lng),
                            }}/>
                        </GoogleMap>
                        </div>
                    )) }
                    
                </div>
                
                <div>
                    <Link href="/search_shop" className="p-1 bg-purple-300 hover:bg-blue-400 rounded-md">戻る</Link>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show_list;