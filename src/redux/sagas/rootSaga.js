import { takeLatest } from "redux-saga/effects";

import {
    addTodo,
    delTodo,
    editTodo,
    getAllTodos
} from "../slices/todo";

import {
    handleDeleteTodoById,
    handleEditTodoById,
    handleGetAllTodos,
    handlePostTodo
} from "./handlers/todo";

export function* watcherSaga() {
    yield takeLatest(getAllTodos.type, handleGetAllTodos)
    yield takeLatest(addTodo.type, handlePostTodo)
    yield takeLatest(delTodo.type, handleDeleteTodoById)
    yield takeLatest(editTodo.type, handleEditTodoById)
}