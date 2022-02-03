import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import todoReducer from "./ducks/todo";

//middle wares
const sagaMiddleware = createSagaMiddleware()
const devToolMiddleware = 
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
const middleWares = [sagaMiddleware]
//reducers
const reducers = combineReducers({
    todo: todoReducer
})

//store config
const store = createStore(
    reducers,
    devToolMiddleware,
    applyMiddleware(...middleWares)
)

// then run the saga
sagaMiddleware.run(mySaga)

export default store 