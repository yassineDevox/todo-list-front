import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./ducks/todo"
import userReducer from "./ducks/user"


const store = configureStore({
    reducer: combineReducers({
        todos: todoReducer,
        user: userReducer
    })
})

export default store 