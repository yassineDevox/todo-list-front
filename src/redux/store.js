import { combineReducers, createStore } from "redux";
import todoReducer from "./ducks/todo";
import userReducer from "./ducks/user";

const store = createStore(
    combineReducers({
        todo: todoReducer,
        user: userReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store 