import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
//import style_mapModule from "./japan_responsive_map/style_map.module.css";
import "./index.css";

const Index = (props) => {
    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    カフェマップ
                </h2>
            }
        >
            <div className="p-12">
                <div>
                    <h2>
                        <Link href="/shop_local_map">
                            近くのカフェを探す(現在地から探す)
                        </Link>
                    </h2>
                </div>
                <div>
                    <h2>
                        <Link href="/">都道府県から探す</Link>
                    </h2>

                    <div id="japan-map" class="clearfix">
                        <div id="hokkaido-touhoku" class="clearfix">
                            <p class="area-title">北海道・東北</p>
                            <div class="area">
                                <Link href="#">
                                    <div id="hokkaido">
                                        <p>北海道</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="aomori">
                                        <p>青森</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="akita">
                                        <p>秋田</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="iwate">
                                        <p>岩手</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="yamagata">
                                        <p>山形</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="miyagi">
                                        <p>宮城</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="fukushima">
                                        <p>福島</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="kantou">
                            <p class="area-title">関東</p>
                            <div class="area">
                                <Link href="#">
                                    <div id="gunma">
                                        <p>群馬</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="tochigi">
                                        <p>栃木</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="ibaraki">
                                        <p>茨城</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="saitama">
                                        <p>埼玉</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="chiba">
                                        <p>千葉</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="tokyo">
                                        <p>東京</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="kanagawa">
                                        <p>神奈川</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="tyubu" class="clearfix">
                            <p class="area-title">中部</p>
                            <div class="area">
                                <Link href="#">
                                    <div id="nigata">
                                        <p>新潟</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="toyama">
                                        <p>富山</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="ishikawa">
                                        <p>石川</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="fukui">
                                        <p>福井</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="nagano">
                                        <p>長野</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="gifu">
                                        <p>岐阜</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="yamanashi">
                                        <p>山梨</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="aichi">
                                        <p>愛知</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="shizuoka">
                                        <p>静岡</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="kinki" class="clearfix">
                            <p class="area-title">近畿</p>
                            <div class="area">
                                <Link href="#">
                                    <div id="kyoto">
                                        <p>京都</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="shiga">
                                        <p>滋賀</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="osaka">
                                        <p>大阪</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="nara">
                                        <p>奈良</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="mie">
                                        <p>三重</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="wakayama">
                                        <p>和歌山</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="hyougo">
                                        <p>兵庫</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="tyugoku" class="clearfix">
                            <p class="area-title">中国</p>
                            <div class="area">
                                <Link href="#">
                                    <div id="tottori">
                                        <p>鳥取</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="okayama">
                                        <p>岡山</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="shimane">
                                        <p>島根</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="hiroshima">
                                        <p>広島</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="yamaguchi">
                                        <p>山口</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="shikoku" class="clearfix">
                            <p class="area-title">四国</p>
                            <div class="area">
                                <Link href="#">
                                    <div id="kagawa">
                                        <p>香川</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="ehime">
                                        <p>愛媛</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="tokushima">
                                        <p>徳島</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="kouchi">
                                        <p>高知</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="kyusyu" class="clearfix">
                            <p class="area-title">九州・沖縄</p>
                            <div class="area">
                                <Link href="#">
                                    <div id="fukuoka">
                                        <p>福岡</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="saga">
                                        <p>佐賀</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="nagasaki">
                                        <p>長崎</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="oita">
                                        <p>大分</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="kumamoto">
                                        <p>熊本</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="miyazaki">
                                        <p>宮崎</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="kagoshima">
                                        <p>鹿児島</p>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div id="okinawa">
                                        <p>沖縄</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
