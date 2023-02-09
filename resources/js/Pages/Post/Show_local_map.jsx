import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react';

const Show_local_map = (props) => {
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    店名・駅名
                </h2>
            }>
            
            <div className="p-12">
                <div>
                    <div>
                        <h2>店名・駅名</h2>
                        <input type="text" placeholder="渋谷駅"/>
                        <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">検索</button>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show_local_map;