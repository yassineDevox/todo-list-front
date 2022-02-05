import axios from "axios";
import { TodoModel } from "../../../model/todo";

export function requestGetAllTodos() {
    return axios.request({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/todos/"
    })
}

export function requestDeleteTodoById(idTodo) {
    return axios.request({
        method: "delete",
        url: "https://jsonplaceholder.typicode.com/todos/" + idTodo
    })
}

export function requestEditTodoById(updatedTodo) {
    console.log(updatedTodo);
    return axios.request({
        method: "put",
        url: "https://jsonplaceholder.typicode.com/todos/" + updatedTodo?.id,
        data: updatedTodo
    })
}

export function requestPostTodo(titleTask) {
    return axios.request({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/todos/",
        data: new TodoModel(null, titleTask)
    })
}