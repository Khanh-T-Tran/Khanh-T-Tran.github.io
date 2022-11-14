
import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Khanh Tran</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button className="button">
                    Contact me
                </button>
            </div>
        </div>
    )
}

export default Navbar;