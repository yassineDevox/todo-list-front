import AxiosClient from "tools/axios";

export class TodoApi {
  get(todoId = "") {
    return AxiosClient.get(`/todos/${todoId}`);
  }

  getAll(connectedUserId="") {
    return AxiosClient.get(`/users/${connectedUserId}/todos`);
  }
}
