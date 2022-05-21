import {createContext} from "react";

export const CartContext = createContext({
    cartItems: [],
    handleAdd: function() {}
})