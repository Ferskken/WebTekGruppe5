import React from "react";
import Navbar from "../navigation/Navbar";
import ShoppingCart from "../shoppingCart/ShoppingCart";

/**
 * Represents the shopping cart
 */
export default class shoppingCartPage extends React.Component {
    render() {
        return(
            <>
                <ShoppingCart />
            </>
        )
    }
}