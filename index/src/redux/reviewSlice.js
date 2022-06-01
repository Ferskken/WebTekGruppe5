import {createSlice} from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        reviews: []
    },
    reducers: {
        setReviews: function (state, action) {
            state.reviews = action.payload;
        },
        addReview: function (state, action) {

        }
    }
});

export const{setReviews} = reviewSlice.actions;
export default reviewSlice.reducer;