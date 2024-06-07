import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        loginSuccess: (state, action) => action.payload,
        logout: () => null 
    }
})

export const {loginSuccess, logout}  = userSlice.actions
export default userSlice.reducer