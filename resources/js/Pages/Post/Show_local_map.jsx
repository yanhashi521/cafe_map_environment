import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoogleMap_show from "./GoogleMap_show";


const Show_local_map = (props) => {

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
                    <GoogleMap_show/>
                    
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show_local_map;