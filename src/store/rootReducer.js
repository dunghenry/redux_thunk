import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import userReducer from "./slices/userSlice";
const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})
export default rootReducer;