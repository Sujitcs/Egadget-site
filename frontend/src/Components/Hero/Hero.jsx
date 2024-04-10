import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
 import hero_image from '../Assets/hero_image.png';
function Hero(){
    return(
        <>
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="handicon"/>
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div onClick={window.scrollTo(100,100)}>Latest Collections</div>
                    <img src={arrow} alt="arrowicon"/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="heroimage" height={550} width={550}/>
            </div>
        </div>
        </>
    )
}
export default Hero;