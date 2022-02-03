import axios from "axios";

export function requestGetAllTodos(){
    return axios.request({
        method:"get",
        url:"https://jsonplaceholder.typicode.com/todos/"
    })
}