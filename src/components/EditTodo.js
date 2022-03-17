import { USE_HOOK } from "hooks/hooks";
import { TodoStatus } from "model";

export const EditTodo = () => {

 const {} = USE_HOOK.useEditTodo()

  return (
    <>
      <form
        className="d-flex flex-column gap-3 w-50 mx-auto align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="form-floating">
          <input
            onFocus={hideAlert}
            className="form-control m-1"
            type="text"
            placeholder="title"
            ref={titleRef}
            id="1"
          />
          <label htmlFor="1">Title task </label>
        </div>
        <div className="form-floating">
          <textarea
            onFocus={hideAlert}
            className="form-control"
            placeholder="Leave a description here"
            id="floatingTextarea"
            ref={descriptionRef}
          />
          <label htmlFor="floatingTextarea">Description</label>
        </div>
        <select
          onFocus={hideAlert}
          ref={statusTaskRef}
          className="form-select"
          aria-label="Default select example"
        >
          <option value={TodoStatus.TODO}>Todo</option>
          <option value={TodoStatus.INPROGRESS}>In Progress</option>
          <option value={TodoStatus.CANCELED}>Canceled</option>
          <option value={TodoStatus.DONE}>Done</option>
        </select>

        <button className="btn btn-success" type="submit">
          {isLoading ? <Spinner color="light" /> : null} Update
        </button>
      </form>
      <div
        className={message !== "" ? "alert alert-success mt-2" : "d-none"}
        role="alert"
      >
        {message}
      </div>
      <div
        className={error ? "alert alert-danger mt-2" : "d-none"}
        role="alert"
      >
        {error}
      </div>
    </>
  );
};

