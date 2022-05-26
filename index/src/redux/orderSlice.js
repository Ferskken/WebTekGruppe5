import {createSlice} from "@reduxjs/toolkit";

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
