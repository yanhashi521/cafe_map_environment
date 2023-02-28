import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Show = (props) => {
    const { favoriteShop } = props; //propsの中のpostsだけを持って行ってる．
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Show
                </h2>
            }>
            
            <div className="inline-grid grid-cols-1 gap-10 text-lg container mx-auto my-20 px-20">
                <h1>{ favoriteShop.shop_name }</h1>
                
                <div>
                    <h3>緯度</h3>
                    <p>{ favoriteShop.lat }</p>
                </div>
                
                <div>
                    <h3>緯度</h3>
                    <p>{ favoriteShop.lng }</p>
                </div>
                
                <div>
                    <Link href={`/search_shop/${favoriteShop.id}/create`} className="p-1 bg-blue-300 hover:bg-blue-400 rounded-md">編集</Link>
                </div>
                    
                <div>
                    <Link href="/search_shop" className="p-1 bg-purple-300 hover:bg-blue-400 rounded-md">戻る</Link>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;