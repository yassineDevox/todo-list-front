import { call, put } from "redux-saga/effects"
import {
    addTodo,
    delTodo,
    editTodo,
    setAllTodos
} from "../../slices/todo"
import {
    requestDeleteTodoById,
    requestEditTodoById,
    requestGetAllTodos,
    requestPostTodo
} from "../requests/todo"

export function* handleGetAllTodos() {
    try {
        const response = yield call(requestGetAllTodos)
        console.log(response);
        yield put(setAllTodos(response?.data))
    } catch (error) {
        console.log(error);
    }
}

export function* handleDeleteTodoById(action) {
    const { payload } = action
    try {
        yield call(requestDeleteTodoById, payload)
        yield put(delTodo(payload))
    } catch (error) {
        console.log(error);
    }
}

export function* handleEditTodoById(action) {
    const { payload } = action
    try {
        const response = yield call(requestEditTodoById(payload))
        const { data } = response
        yield put(editTodo(data))
    } catch (error) {
        console.log(error)
    }
}

export function* handlePostTodo(action) {
    const { payload } = action
    try {
        const response = yield call(requestPostTodo,payload)
        const { data } = response
        console.log(data);
        yield put(addTodo(data))
    } catch (error) {
        console.log(error)
    }
}