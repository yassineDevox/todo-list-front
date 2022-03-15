import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./ducks/auth";
import filterReducer from "./ducks/filter";
import taskReducer from "./ducks/task";

const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    task: taskReducer,
    filter: filterReducer,
  }),
});

export default store;
