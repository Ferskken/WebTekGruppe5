import React, {useEffect} from "react";
import YourPage from "../pages/YourPage"
import {Route, Routes} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import {ActiveLink} from "./ActiveLink";
import {useSelector} from "react-redux";
import {getAuthenticatedUser} from "../api/authentication";
import {getCookie} from "../api/cookies";
import {useNavigate} from "react-router-dom";


/**
 * Navbar which includes navigation to all the pages
 * @returns {JSX.Element}
 * @constructor
 */
export default function Navbar() {


    const cart = useSelector(state => state.cartStore.cart)
    const user = useSelector(state => state.userStore.user)
    const nav = useNavigate();
    //Gets the total amount of products in the cart
    function getItemCount () {
        let totalProducts = 0;
        for (let itemId in cart) {
            const item = cart[itemId];
            totalProducts += item.count;
        }
        return totalProducts;
    }

    //Displays the amount of products in the cart if they are > 0
    function displayCart() {
        if(getItemCount() > 0) {
            return `Handlekurv (${getItemCount()})`
        }
        else {
            return "Handlekurv"
        }
    }

    function displayUser() {
        if(getAuthenticatedUser()) {
            return `Hei! ${getCookie("current_username")}`
        } else {
            return "Din side"
        }
    }

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
                        <img onClick={() => nav("/")} id="logoNav" src={require("../pictures/rk.jpg")} alt={"rodeKors"}/>
                    </div>
                     <ul className="menu-items" id={"menuList"}>
                        <li className={"hover-underline-animation"}><ActiveLink to="/">Hjem</ActiveLink></li>
                        <li className={"hover-underline-animation"}><ActiveLink to="/produkter">Produkter</ActiveLink></li>
                        <li className={"hover-underline-animation"}><ActiveLink to="/handlekurv">{displayCart()}</ActiveLink></li>
                        <li className={"hover-underline-animation"}><ActiveLink to="/dinside">{displayUser()}</ActiveLink></li>
                    </ul>
             </div>
            </div>
        </nav>

    )
}