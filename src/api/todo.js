import { TodoModel } from "model";
import { AxiosClient } from "tools/axios";

class TodoApi {

  get(todoId = "") {
    return AxiosClient.get(`/todos/${todoId}`);
  }

  getAll(connectedUserId = "") {
    return AxiosClient.get(`/users/${connectedUserId}/todos`);
  }

  add(newTask = new TodoModel(), connectedUserId = "") {
    return AxiosClient.post(`/users/${connectedUserId}/todos`, newTask);
  }

  edit(updatedTask = new TodoModel(), connectedUserId = "") {
    return AxiosClient.put(`/users/${connectedUserId}/todos`, updatedTask);
  }
  delete(todoId = "", connectedUserId = "") {
    return AxiosClient.delete(`/users/${connectedUserId}/todos/${todoId}`);
  }
}

export const todoApi = new TodoApi()