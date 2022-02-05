import { configureStore, getDefaultMiddleware, combineReducers, compose } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/rootSaga";
import todoReducer from "./slices/todo"
//middle wares
const sagaMiddleware = createSagaMiddleware()
const devToolMiddleware =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
//reducers
const reducers = combineReducers({
    todo: todoReducer
})

const middlewares = [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })]
//store config
const store = configureStore({
    reducers,
    middleware: devToolMiddleware
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : compose(applyMiddleware(...middlewares))
})
// then run the saga
sagaMiddleware.run(watcherSaga)

export default store 