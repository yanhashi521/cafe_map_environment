import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    const {favoriteShop} = props;
    const {data, setData, put} = useForm({
        shop_name: "入力",
        lat: favoriteShop.lat,
        lng: favoriteShop.lng,
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/search_shop/${favoriteShop.id}`);
    }

    console.log(data); // 確認用に追加
    
    return (
        <Authenticated auth={props.auth} header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        お気に入り登録
                    </h2>
            }>
            
            <div className="p-12">
                
            <form onSubmit={handleSendPosts}>
                <div>
                    <h2>お店の名前</h2>
                    <input type="text" placeholder="お店の名前" value={data.shop_name} onChange={(e) => setData("shop_name", e.target.value)}/>
                </div>
                
                <div>
                    <h2>lat</h2>
                    <input type="text" placeholder="lat" value={data.lat}/>
                </div>
                
                <div>
                    <h2>lng</h2>
                    <input type="text" placeholder="lng" value={data.lng}/>
                </div>
                
                <button type="submit" className="p-1 bg-purple-300 hover:bg-blue-400 rounded-md">send</button>
                
            </form>
            </div>
        </Authenticated>
        );
}

export default Create;