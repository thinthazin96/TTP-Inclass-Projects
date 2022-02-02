import React from "react";
//importing logo.svg 
import logo from "../../logo.svg";
//importing navbar.scss 
import "./navbar.scss";

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} alt="city tours company"/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active">
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    );
}