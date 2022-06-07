import {createSlice} from "@reduxjs/toolkit";

/**
    Global state for review.
**/
export const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        reviews: []
    },
    reducers: {
        setReviews: function (state, action) {
            state.reviews = action.payload;
        },
    }
});

export const{setReviews} = reviewSlice.actions;
export default reviewSlice.reducer;