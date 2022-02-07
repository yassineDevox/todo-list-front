import { configureStore,combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./ducks/todo"


const store  = configureStore({
    reducer: combineReducers({
        todos:todoReducer
    })
})

export default store 