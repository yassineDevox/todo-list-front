import { TodoModel } from "model/todo";
import { TodoStatus } from "model/todoStatus";
import React from "react";

const Todo = ({ t = new TodoModel() }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={
          t.status === TodoStatus.DONE
            ? "text-decoration-line-through fs-5"
            : "fs-5"
        }
      >
        {t.title}
      </span>
      <div>
        <button className="btn btn-danger me-2 p-1" style={{ opacity: 0.8 }}>
          <i className="fas fa-trash"></i>
        </button>
        <button
          className="btn btn-warning p-1"
          style={{ opacity: 0.8 }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          {" "}
          <i className="fas fa-edit"></i>{" "}
        </button>
      </div>
    </li>
  );
};

export default Todo;
