import {useContext} from "react";
import {CartContext} from "../context/CartContext";

export default function AddToCartButton(props) {
    const cartContext = useContext(CartContext)
    const addFunction = cartContext.handleAdd

    return (
        <button onClick={() => addFunction(props.product)}>Add</button>
    )
}