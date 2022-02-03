import { takeLatest } from "redux-saga/effects";
import { GET_ALL_TODOS } from "../ducks/todo";
import { handleGetAllTodos } from "./handlers/todo";

export function* watcherSaga(){
    yield takeLatest(GET_ALL_TODOS,handleGetAllTodos)
}