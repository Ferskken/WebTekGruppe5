import {createSlice} from "@reduxjs/toolkit";

/**
    Global state for product.
**/
export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        setProducts: function (state, action) {
            state.products = action.payload;
        }
    }
});

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;
