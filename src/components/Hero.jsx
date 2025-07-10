import React from "react";
import './Hero.css';

function Hero({ params }) {

    const heroParams = params ?? {
        bgcolor: "#000",
        color: "#fff",
        height: "200px",
        headline: "ヒーローエリアの見出し",
        caption: "ヒーローエリアのキャプション"

    };

    return (
        <section style={{ background: heroParams.bgcolor, height: heroParams.height, color: heroParams.color }} className="dynamicHero">
            <h1>{heroParams.headline}</h1>
            <p>{heroParams.caption}</p>
        </section>

    );
}

export default Hero;
