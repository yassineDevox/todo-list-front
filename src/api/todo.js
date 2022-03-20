import { TodoModel } from "model";
import { AxiosClient } from "tools/axios";

export class TodoApi {
  
  static get(todoId = "") {
    return AxiosClient.get(`/todos/${todoId}`);
  }

  static getAll(connectedUserId = "") {
    return AxiosClient.get(`/users/${connectedUserId}/todos`);
  }

  static add(newTask = new TodoModel(), connectedUserId = "") {
    return AxiosClient.post(`/users/${connectedUserId}/todos`, newTask);
  }

  static edit(updatedTask = new TodoModel(), connectedUserId = "") {
    console.log(1)
    return AxiosClient.put(`/users/${connectedUserId}/todos/${updatedTask.id}`, updatedTask);
  }
  static delete(todoId = "", connectedUserId = "") {
    return AxiosClient.delete(`/users/${connectedUserId}/todos/${todoId}`);
  }
}
