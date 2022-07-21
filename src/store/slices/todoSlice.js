import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "../actions/todoActions";
const initialState = {
    todos: [],
    loading: false,
    error: '',
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(getTodos.fulfilled, (state, action)=>{
            state.loading = false;
            state.todos = action.payload;
        })
        builder.addCase(getTodos.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

const todoReducer = todoSlice.reducer

export default todoReducer;