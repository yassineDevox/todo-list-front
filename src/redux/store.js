import { combineReducers, createStore } from "redux";
import todoReducer from "./ducks/todo";

const store = createStore(
    combineReducers({
        todo: todoReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store 