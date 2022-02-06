import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/root";
import todoReducer from "./slices/todo"
//middle wares
const sagaMiddleware = createSagaMiddleware()

//reducers
const reducer = combineReducers({
    todo: todoReducer
})

const middlewares = [sagaMiddleware,
    ...getDefaultMiddleware(
        { thunk: false, serializableCheck: false }
    )]
//store config
const store = configureStore({
    reducer,
    middleware: [...middlewares]
})
// then run the saga
sagaMiddleware.run(rootSaga)

export default store 