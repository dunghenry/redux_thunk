import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: {},
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
})

const userReducer = userSlice.reducer;

export default userReducer;