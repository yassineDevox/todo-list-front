import { call, put } from "redux-saga/effects"
import { addTodo, delTodo, editTodo, setAllTodos } from "../../ducks/todo"
import { requestDeleteTodoById, requestEditTodoById, requestGetAllTodos, requestPostTodo } from "../requests/todo"

export function* handleGetAllTodos() {
    try {
        const response = yield call(requestGetAllTodos)
        const { data } = response
        yield put(setAllTodos(data))
    } catch (error) {
        console.log(error);
    }
}

export function* handleDeleteTodoById(action) {
    const { payload: { deletedID } } = action
    try {
        const response = yield call(requestDeleteTodoById(deletedID))
        yield put(delTodo(deletedID))
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
    const { payload: { titleTask } } = action
    try {
        const response = yield call(requestPostTodo(titleTask))
        const { data } = response
        yield put(addTodo(data))
    } catch (error) {
        console.log(error)
    }
}