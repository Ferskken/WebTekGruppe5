import React from "react";
import {useDispatch} from "react-redux";
import {emptyCart, removeCartItem} from "../redux/shoppingCartSlice";

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
        <button className="articleBtn" onClick={actionFunction}>remove</button>
    )
}
//Used to determine which button was clicked in shopping cart
export const DELETE_ALL = "all";