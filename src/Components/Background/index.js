import React from "react";
import 'animate.css';
import './background.css';

import darksky from '../../assets/images/darksky-stars.png';
import spot from '../../assets/images/darkspots.png';
import cloud from '../../assets/images/clouds.png';

const background = () => {
    return (
        <>
            <div className="stars" style={{backgroundImage: `url(${darksky})` }}></div>
            <div className="twinkling" style={{backgroundImage: `url(${spot})` }}></div>  
            <div className="clouds" style={{backgroundImage: `url(${cloud})` }}></div>             
        </>
    )
}

export default background;