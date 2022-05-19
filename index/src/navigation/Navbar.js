import React from "react";
import YourPage from "../pages/YourPage"
import {Route, Routes} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import {ActiveLink} from "./ActiveLink";

export default function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="container nav-container">
                    <input className="checkbox" type="checkbox" name={"navigationMenu"}/>
                    <div className="hamburger-lines">
                        <span className="line line1"/>
                        <span className="line line2"/>
                        <span className="line line3"/>
                    </div>
                    <div className="logo">
                        <h1><img src={require("../pictures/rk.jpg")} alt={"rodeKors"}/></h1>
                    </div>
                     <ul className="menu-items" id={"menuList"}>
                        <li><ActiveLink to="/">Hjem</ActiveLink></li>
                        <li><ActiveLink to="/omoss">Om oss</ActiveLink></li>
                        <li><ActiveLink to="/produkter">Produkter</ActiveLink></li>
                        <li><ActiveLink to="/handlekurv">Handlekurv</ActiveLink></li>
                        <li><ActiveLink to="/dinside">Din side</ActiveLink></li>
                    </ul>
             </div>
            </div>
        </nav>

    )
}