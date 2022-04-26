import React from "react";

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
                        <h1><img src={require("../pictures/rk.jpg")}  alt={"rodeKors"}/></h1>
                    </div>
                    <ul className="menu-items" id={"menuList"}>
                        <li><a href={"aboutus.html"}>Om oss</a></li>
                        <li><a href={"products.html"}>Produkter</a></li>
                        <li><a href={"contacts.html"}>Kontakter</a></li>
                        <li><a href={"destinations.html"}>Destinasjoner</a></li>
                        <li><a href={"yourpage.html"}>Din side</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}