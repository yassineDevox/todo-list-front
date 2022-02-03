import { call, put } from "redux-saga/effects"
import { setAllTodos } from "../../ducks/todo"
import { requestGetAllTodos } from "../requests/todo"
export function* handleGetAllTodos(action) {
    try {
        const response = yield call(requestGetAllTodos)
        const { data } = response
        yield put(setAllTodos(data))
    } catch (error) {

    }
}