import { call, put } from "redux-saga/effects"
import * as REQ from "./../requests/todo"
import * as ACTION from "./../../slices/todo"

export function* handleGetAllTodos() {
    try {
        const response = yield call(REQ.requestGetAllTodos)
        yield put(ACTION.todosLoadded(response?.data))
    } catch (error) {
        console.log(error);
    }
}

export function* handleDeleteTodoById(action) {
    const { payload } = action
    try {
        yield call(REQ.requestDeleteTodoById(payload))
        yield put(ACTION.todoDeleted(payload))
    } catch (error) {
        console.log(error);
    }
}

export function* handleEditTodoById(action) {
    const { payload } = action
    try {
        const response = yield call(REQ.requestEditTodoById(payload))
        const { data } = response
        yield put(ACTION.todoUpdated(data))
    } catch (error) {
        console.log(error)
    }
}

export function* handlePostTodo(action) {
    console.log("handlePost called",action)
    try {
        const response = yield call(REQ.requestPostTodo,action.payload)
        const { data } = response
          yield put(ACTION.todoAdded(data))
    } catch (error) {
        console.log(error)
    }
}