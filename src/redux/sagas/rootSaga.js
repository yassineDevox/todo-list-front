import { takeLatest } from "redux-saga/effects";

import {
    ADD_TODO,
    DEL_TODO,
    EDIT_TODO,
    GET_ALL_TODOS
} from "../ducks/todo";

import {
    handleDeleteTodoById,
    handleEditTodoById,
    handleGetAllTodos,
    handlePostTodo
} from "./handlers/todo";

export function* watcherSaga() {
    yield takeLatest(GET_ALL_TODOS, handleGetAllTodos)
    yield takeLatest(ADD_TODO, handlePostTodo)
    yield takeLatest(DEL_TODO, handleDeleteTodoById)
    yield takeLatest(EDIT_TODO, handleEditTodoById)
}