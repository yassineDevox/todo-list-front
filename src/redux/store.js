import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./ducks/auth"
import taskReducer from "./ducks/task"

const store = configureStore({
    reducer: combineReducers({
        auth:authReducer,
        task:taskReducer
    })
})

export default store 