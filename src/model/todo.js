import { TodoStatus } from "./todoStatus";

export class TodoModel {
  constructor(
    id = 0,
    title = "",
    status = TodoStatus.TODO,
    description = "",
    userId = 1
  ) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
