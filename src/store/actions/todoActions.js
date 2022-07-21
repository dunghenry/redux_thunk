import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodos = createAsyncThunk('todo/getTodos', async(_, {rejectWithValue}) =>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        return response.data
    } catch (error) {
        return rejectWithValue(error.message);
    }
});