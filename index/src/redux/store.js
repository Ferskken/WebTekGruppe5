import {configureStore} from '@reduxjs/toolkit'
import productReducer from "./productSlice"
import userReducer from "./userSlice"
import cartReducer from "./shoppingCartSlice"
import orderReducer from "./orderSlice";
import reviewReducer from "./reviewSlice"

export default configureStore({
    reducer: {
        productStore: productReducer,
        userStore: userReducer,
        cartStore: cartReducer,
        orderStore: orderReducer,
        reviewStore: reviewReducer
    }
})