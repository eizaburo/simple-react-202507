import React from "react";
import './Home.css';
import './Contact'
import Contact from "./Contact";

function Home() {
    return (
        <main>
            <section className="hero">
                <h1>ヒーローエリアです</h1>
                <p>ここはヒーローエリアのサブタイトルです</p>
            </section>
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