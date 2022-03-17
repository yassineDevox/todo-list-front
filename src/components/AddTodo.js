import { useHelper } from "helpers/helpers";
import { TodoModel } from "model/todo";
import { TodoStatus } from "model/todoStatus";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskFromAPI } from "redux/ducks/task";
import Spinner from "shared/spinner/spinner";
import AxiosClient from "tools/axios";


export const AddTodo = () => {
  //define a title ref on the input to get the value of it
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusTaskRef = useRef();

  //redux store
  const ConnectedUserId = useSelector((s) => s.auth.user.id);

  //redux actions
  const call = useDispatch();

  //state
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //on submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    //get values
    const title = useHelper.getRefVal(titleRef);
    const description = useHelper.getRefVal(descriptionRef);
    const statusTask = useHelper.getRefVal(statusTaskRef);

    //validation des donnee
    if (!title || !description || !statusTask) alert("Empty values error 😈 !");
    else if (
      statusTask !== TodoStatus.DONE &&
      statusTask !== TodoStatus.CANCELED &&
      statusTask !== TodoStatus.INPROGRESS &&
      statusTask !== TodoStatus.TODO
    ) {
      alert("Invalid status task value 😈 !");
      console.log(statusTask);
    } else {
      setIsLoading(true);
      const newTask = new TodoModel(
        null,
        title,
        statusTask,
        description,
        ConnectedUserId
      );
      AxiosClient.post("/todos", newTask)
        .then((response) => {
          setIsLoading(false);
          setMessage(response?.data.msg);
          newTask.id = response.data.todoId
          call(addTaskFromAPI(newTask));
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.response?.data.msg);
        });
    }
    //vider linputs
    useHelper.setRefVal(titleRef, "");
    useHelper.setRefVal(descriptionRef, "");
    useHelper.setRefVal(statusTaskRef, TodoStatus.TODO);
  };

  //hide alert
  const hideAlert = () => {
    setError("");
    setMessage("");
  };

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
          {isLoading ? <Spinner color="light" /> : null} Save
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

