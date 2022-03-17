import { TodoModel, TodoStatus } from "model";
import React from "react";

const getDurration = (startedAt, doneAt) => {
  const s = new Date(startedAt);
  const d = new Date(doneAt);
  const durration = d - s;
  const min = Math.floor(durration / 60000);
  const sec = Math.floor((durration - min * 60000) / 1000);
  return `${min}m${sec}s`;
};
const getColor = (content) => {
  switch (content) {
    case TodoStatus.TODO:
      return "primary";
    case TodoStatus.DONE:
      return "success";
    case TodoStatus.INPROGRESS:
      return "info";
    case TodoStatus.CANCELED:
      return "danger";
  }
};

const TodoDetails = ({ t = new TodoModel() }) => {
  return (
    <>
      <div
        className={`mx-auto card text-white bg-${getColor(t.status)} mb-3`}
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">{t.status}</div>
        <div className="card-body">
          <h5 className="card-title">{t.title}</h5>
          <p className="card-text text-white">{t.description}</p>
          <p
            className={
              t.status === TodoStatus.INPROGRESS || t.status === TodoStatus.DONE
                ? "me-1 fs-6 text-white"
                : "d-none"
            }
          >
            {t.startedAt?.replace("T", " ").replace(".000Z", "")}
          </p>
          <p
            className={
              t.status === TodoStatus.DONE ? " text-white me-1 fs-6" : "d-none"
            }
          >
            {t.doneAt?.replace("T", " ").replace(".000Z", "")}
            <br />
            @lastedtime({getDurration(t.startedAt, t.doneAt)})
          </p>
        </div>
      </div>
    </>
  );
};

export default TodoDetails;
