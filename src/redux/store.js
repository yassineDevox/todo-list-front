import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import todoReducer from "./ducks/todo";
import { watcherSaga } from "./sagas/rootSaga";

//middle wares
const sagaMiddleware = createSagaMiddleware()
const devToolMiddleware = 
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
//reducers
const reducers = combineReducers({
    todo: todoReducer
})

//store config
const store = createStore(
    reducers,
    devToolMiddleware
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : compose(applyMiddleware(sagaMiddleware))
)
// then run the saga
sagaMiddleware.run(watcherSaga)

export default store 