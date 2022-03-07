import { TodoStatus } from "model/todoStatus";
import { useRef } from "react";

const AddTodo = () => {
  //define a title ref on the input to get the value of it
  const title = useRef();

  //on submit form
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        className="d-flex flex-column gap-3 w-50 mx-auto align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="form-floating">
          <input
            className="form-control m-1"
            type="text"
            placeholder="title"
            ref={title}
            id="1"
          />
          <label htmlFor="1">Title task </label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a description here"
            id="floatingTextarea"
          />
          <label htmlFor="floatingTextarea">Description</label>
        </div>
        <select className="form-select" aria-label="Default select example">
          <option value={TodoStatus.TODO} selected>Todo</option>
          <option value={TodoStatus.INPROGRESS}>In Progress</option>
          <option value={TodoStatus.CANCELED}>Canceled</option>
          <option value={TodoStatus.DONE}>Done</option>
        </select>

        <button className="btn btn-success" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default AddTodo;
