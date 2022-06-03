import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: ""
    },
    reducers: {
        setUser: function (state, action) {
            state.user = action.payload;
        },
        unsetUser: function (state, action) {
            state.user = "";
        }
    }
});

export const {setUser, unsetUser} = userSlice.actions;
export default userSlice.reducer;