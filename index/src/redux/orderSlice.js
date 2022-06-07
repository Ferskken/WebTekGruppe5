import {createSlice} from "@reduxjs/toolkit";

/**
    Global state for order.
**/
export const orderSlice = createSlice({
    name: "orders",
    initialState: {
        products: []
    },
    reducers: {
        setOrder: function (state, action) {
            state.orders = action.payload;
        }
    }
});

export const {setOrder} = orderSlice.actions;
export default orderSlice.reducer;
