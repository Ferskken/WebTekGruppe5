import React from "react";
import {useDispatch} from "react-redux";
import {emptyCart, removeCartItem} from "../redux/shoppingCartSlice";

/**
 * Removes one or all of the objects in the redux cart slice
 * specify DELETE_ALL for delete all functionality, the product id for a single object
 * @param props product object id to delete
 * @returns {JSX.Element}
 * @constructor
 */
export function RemoveFromCartButton(props) {

    const dispatch = useDispatch();

    let actionFunction;

    props.id === DELETE_ALL ?
        actionFunction = function() {
        dispatch(emptyCart())}
        : actionFunction = function () {
        dispatch(removeCartItem(props.id))
        }


    return (
        <button className="Action" onClick={actionFunction}>{props.buttonText}</button>
    )
}
//Used to determine which button was clicked in shopping cart
export const DELETE_ALL = "all";