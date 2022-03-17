import { useHelper } from "helpers/helpers";
import { USE_HOOK } from "hooks/hooks";
import { TodoModel, TodoStatus } from "model";
import { Badge, Spinner } from "shared";

export const Todo = ({ t = new TodoModel() }) => {

  const {
    isLoadoing,
    handleClickDelete,
    handleClickEdit,
    handleClickMoreDetails,
  } = USE_HOOK.useDeleteTodo();
  
  return (
    <li
      style={{ opacity: isLoadoing ? ".7" : "1" }}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div className="d-flex flex-column">
        <span
          className={
            t.status === TodoStatus.DONE
              ? "text-decoration-line-through fs-5"
              : "fs-5"
          }
        >
          <Badge content={t.status} />

          {t.title}
        </span>
        <span
          className={
            t.status === TodoStatus.INPROGRESS
              ? "text-info me-1 fs-6"
              : "d-none"
          }
        >
          {t.startedAt.replace("T", " ").replace(".000Z", "")}
        </span>
        <span
          className={
            t.status === TodoStatus.DONE ? "text-success me-1 fs-6" : "d-none"
          }
        >
          {t.doneAt.replace("T", " ").replace(".000Z", "")}
          <br />
          @lastedtime({useHelper.getDurration(t.startedAt, t.doneAt)})
        </span>
      </div>
      {isLoadoing ? <Spinner color="danger" /> : null}

      <div>
        <button className="btn btn-danger me-2 p-1" onClick={handleClickDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <button
          onClick={handleClickMoreDetails}
          className="btn btn-warning p-1 me-2"
        >
          <i className="fas fa-eye"></i>
        </button>
        <button
          className="btn btn-success p-1"
          onClick={handleClickEdit}
          title="mode details"
        >
          <i className="fas fa-edit"></i>
        </button>
      </div>
    </li>
  );
};
