import React from "react";
import './Home.css';

import Hero from '../components/Hero';

function Home() {

    const homeHero = {
        bgcolor: "#aaa",
        color: "#fff",
        height: "200px",
        headline: "Homeのヒーローエリア",
        caption: "Homeのヒーローエリアの説明文です。"
    }

    return (
        <main className="home">
            {/* <section className="hero">
                <h1>ヒーローエリアです</h1>
                <p>ここはヒーローエリアのサブタイトルです</p>
            </section> */}
            <Hero params={homeHero} />
            <section className="services">
                <div className="service">
                    <h2>サービスA</h2>
                    <p>サービスAの説明です</p>
                </div>
                <div className="service">
                    <h2>サービスB</h2>
                    <p>サービスBの説明です</p>
                </div>
                <div className="service">
                    <h2>サービスC</h2>
                    <p>サービスCの説明です</p>
                </div>
            </section>
        </main>
    );
}

export default Home;