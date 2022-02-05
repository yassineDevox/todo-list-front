import { configureStore, getDefaultMiddleware, combineReducers, compose ,applyMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/rootSaga";
import todoReducer from "./slices/todo"
//middle wares
const sagaMiddleware = createSagaMiddleware()

//reducers
const reducer = combineReducers({
    todo: todoReducer
})

const middlewares = [sagaMiddleware, ...getDefaultMiddleware({ thunk: false ,serializableCheck:false})]
//store config
const store = configureStore({
    reducer,
    middleware: [...middlewares]
})
// then run the saga
sagaMiddleware.run(watcherSaga)

export default store 