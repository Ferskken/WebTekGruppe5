import {useDispatch} from "react-redux";
import {addItemToCart} from "../redux/shoppingCartSlice";


export default function AddToCartButton(props) {
    const dispatch = useDispatch();
    
    return (
        <button className="articleBtn" onClick={() => dispatch(addItemToCart(props.product))}>Add to cart</button>
    )
}