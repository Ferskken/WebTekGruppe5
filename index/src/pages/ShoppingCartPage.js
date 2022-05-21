import React from "react";
import Navbar from "../navigation/Navbar";
import ShoppingCart from "../shoppingCart/ShoppingCart";

export default class shoppingCartPage extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <ShoppingCart />
            </>
        )
    }
}