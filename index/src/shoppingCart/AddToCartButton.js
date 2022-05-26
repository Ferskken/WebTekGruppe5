import {useDispatch} from "react-redux";
import {addItemToCart} from "../redux/shoppingCartSlice";

/**
 * Adds an object to the redux cart slice
 * @param props the product object to add
 * @returns {JSX.Element}
 * @constructor
 */
export default function AddToCartButton(props) {
    const dispatch = useDispatch();

    return (
        <button className="articleBtn" onClick={() => dispatch(addItemToCart(props.product))}>LEGG TIL</button>
    )
}