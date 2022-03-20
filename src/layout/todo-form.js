import { TodoStatus } from "model";
import { Spinner } from "shared";

export const TodoForm = ({action="save",data,handlers}) => {
  return (
    <form
      className="d-flex flex-column gap-3 w-50 mx-auto align-items-center"
      onSubmit={handlers.handleSubmit}
    >
      <div className="form-floating">
        <input
          onFocus={handlers.handleOnFocus}
          className="form-control m-1"
          type="text"
          placeholder="title"
          ref={data.titleRef}
          id="1"
        />
        <label htmlFor="1">Title task </label>
      </div>
      <div className="form-floating">
        <textarea
          onFocus={handlers.handleOnFocus}
          className="form-control"
          placeholder="Leave a description here"
          id="floatingTextarea"
          ref={data.descriptionRef}
        />
        <label htmlFor="floatingTextarea">Description</label>
      </div>
      <select
        onFocus={handlers.handleOnFocus}
        ref={data.statusTaskRef}
        className="form-select"
        aria-label="Default select example"
      >
        <option value={TodoStatus.TODO}>Todo</option>
        <option value={TodoStatus.INPROGRESS}>In Progress</option>
        <option value={TodoStatus.CANCELED}>Canceled</option>
        <option value={TodoStatus.DONE}>Done</option>
      </select>

      <button className="btn btn-success text-capitalize" type="submit">
        {data.isLoading ? <Spinner color="light" /> : null} {action}
      </button>
    </form>
  );
};
