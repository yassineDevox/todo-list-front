import { all } from "redux-saga/effects";
import { watcherTodoSaga } from "./watchers/todo";

function* rootSaga() {
    yield all([
        watcherTodoSaga()
    ])
}
export default rootSaga