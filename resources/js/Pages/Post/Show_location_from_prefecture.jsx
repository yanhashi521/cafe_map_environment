import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoogleMap_show from "./GoogleMap_show";


const Show_location_from_prefecure = (props) => {
    

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    店名・駅名
                </h2>
            }>
            <Link href="/top">戻る</Link>
            <div className="p-12">
                
                <div>
                    <GoogleMap_show/>
                </div>
                {/*<div>
                    <h2>{data.prefecture}</h2>
                </div>*/}
            </div>
            
        </Authenticated>
        );
}

export default Show_location_from_prefecure;