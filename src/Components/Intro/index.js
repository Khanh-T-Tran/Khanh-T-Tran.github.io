import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import './intro.css';



const Intro = () => {
    return (
        <>
            <div className="intro">
                <div className="i-left">
                    <div className="i-name">
                        <span>Hi! I am </span>
                        <span>Khanh Tran</span>
                        <span> an enthusiastic full-stack web developer.</span>
                    </div>
                    <button className="button i-button">Hire</button>
                </div>

            </div>
        </>
    )
}

export default Intro;