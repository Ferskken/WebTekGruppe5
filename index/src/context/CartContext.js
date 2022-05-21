import {createContext} from "react";

export const CartContext = createContext({
    cartItems: [],
    handleDelete: function() {},
    handleAdd: function() {}
})