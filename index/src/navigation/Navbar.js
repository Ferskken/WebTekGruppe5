import React, {useEffect} from "react";
import YourPage from "../pages/YourPage"
import {Route, Routes} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import {ActiveLink} from "./ActiveLink";
import {useSelector} from "react-redux";
import {SHOPPING_CART_COUNT} from "../shoppingCart/ShoppingCart";
import heartbeat from "../pictures/Heartbeatcropped.png"


/**
 * Navbar which includes navigation to all the pages
 * @returns {JSX.Element}
 * @constructor
 */
export default function Navbar() {
    const cart = useSelector(state => state.cartStore.cart)
    const user = useSelector(state => state.userStore.user)

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
        if(user) {
            return `Hei! ${user.username}`
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
                        <h1><img id="logoNav" src={require("../pictures/rk.jpg")} alt={"rodeKors"}/></h1>
                    </div>
                     <ul className="menu-items" id={"menuList"}>
                        <li><ActiveLink to="/">Hjem</ActiveLink></li>
                        <li><ActiveLink to="/produkter">Produkter</ActiveLink></li>
                        <li><ActiveLink to="/handlekurv">{displayCart()}</ActiveLink></li>
                        <li><ActiveLink to="/dinside">{displayUser()}</ActiveLink></li>
                    </ul>
             </div>
            </div>
        </nav>

    )
}