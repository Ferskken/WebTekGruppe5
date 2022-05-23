import React, {useEffect} from "react";
import YourPage from "../pages/YourPage"
import {Route, Routes} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import {ActiveLink} from "./ActiveLink";
import {useSelector} from "react-redux";
import {SHOPPING_CART_COUNT} from "../shoppingCart/ShoppingCart";

export default function Navbar() {

    const products = useSelector(state => state.productStore.products)
    const productLength = products.length

    const cart = useSelector(state => state.cartStore.cart)

    function getItemCount () {
        let totalProducts = 0;
        for (let itemId in cart) {
            const item = cart[itemId];
            totalProducts += item.count;
        }
        return totalProducts;
    }

    function displayCart() {
        if(getItemCount() > 0) {
            return `Handlekurv (${getItemCount()})`
        }
        else {
            return "Handlekurv"
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
                        <h1><img src={require("../pictures/rk.jpg")} alt={"rodeKors"}/></h1>
                    </div>
                     <ul className="menu-items" id={"menuList"}>
                        <li><ActiveLink to="/">Hjem</ActiveLink></li>
                        <li><ActiveLink to="/produkter">Produkter</ActiveLink></li>
                        <li><ActiveLink to="/handlekurv">{displayCart()}</ActiveLink></li>
                        <li><ActiveLink to="/dinside">Din side</ActiveLink></li>
                    </ul>
             </div>
            </div>
        </nav>

    )
}