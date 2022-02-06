import { all, takeEvery } from "redux-saga/effects";

import * as ACTIONS from "../../slices/todo";

import * as HANDLER from "../handlers/todo";


function* watchLoadTodos() {
    yield takeEvery(ACTIONS.loadTodos.type, HANDLER.handleGetAllTodos)
}


function* watchAddTodo() {
    yield takeEvery(ACTIONS.addTodo.type, HANDLER.handlePostTodo)
}

function* watchEditTodo() {
    yield takeEvery(ACTIONS.editTodo.type, HANDLER.handleEditTodoById)
}

function* watchDeleteTodo() {
    yield takeEvery(ACTIONS.delTodo.type, HANDLER.handleDeleteTodoById)
}


export function* watcherTodoSaga() {
    yield all(
        [
            watchLoadTodos(),
            watchAddTodo(),
            watchDeleteTodo(),
            watchEditTodo()
        ]
    )
}