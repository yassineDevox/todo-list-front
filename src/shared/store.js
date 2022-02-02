import { createStore } from "redux";
import { todoReducer } from "./reducers/todo";

//appel au reducer et configuer le dev tool 
const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store 