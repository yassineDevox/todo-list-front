import { todoApi } from "api/todo";
import { useHelper } from "helpers/helpers";
import { TodoModel } from "model";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addTaskFromAPI, loadTasksFromAPI } from "redux/ducks/task";
import { AxiosClient } from "tools/axios";

export const USE_HOOK = {
  useFetchTodos,
  useFetchTodoDetails,
  useAddTodo,
  useEditTodo,
};

//_______LIST_TODO __________
const useFetchTodos = () => {
  const connectedUserId = useSelector((s) => s.auth.user.id);
  const listTask = useSelector((s) => s.task.list);
  const [isLoading, setIsLoading] = useState(false);
  const call = useDispatch();

  useEffect(() => {
    //get all todos of connected user
    if (connectedUserId !== undefined && listTask.length === 0) {
      setIsLoading(true);
      try {
        let res = await todoApi.getAll(connectedUserId);
        setIsLoading(false);
        call(loadTasksFromAPI(res.data));
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  }, [connectedUserId]);

  return { isLoading };
};

//______TODO-DETAILS________
const useFetchTodoDetails = () => {
  const [todo, setTodo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { todoId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    try {
      let res = todoApi.get(todoId);
      setIsLoading(false);
      setTodo(res.data.todo);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  return { isLoading, todo };
};

//____ADD-TODO_____

const useAddTodo = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusTaskRef = useRef();

  const ConnectedUserId = useSelector((s) => s.auth.user.id);

  const call = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = useHelper.getRefVal(titleRef);
    const description = useHelper.getRefVal(descriptionRef);
    const statusTask = useHelper.getRefVal(statusTaskRef);

    //validation des donnee
    if (useHelper.VALIDATION.isEmpty({ title, description, statusTask }))
      alert("Empty values error 😈 !");
    else if (useHelper.VALIDATION.inTaskStatusVals(statusTask)) {
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
          newTask.id = response.data.todoId;
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

  return { hideAlert, handleSubmit, isLoading, message, error };
};

//___EDIT-TODO____
const useEditTodo = () => {
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

  //redux selector
  const list = useSelector((s) => s.task.list);
  //get the todoId param
  const { todoId } = useParams();
  //retrieve the edited task from redux store
  useEffect(() => {
    const editedTask = list.find((t) => t.id === Number(todoId));
    setVal(titleRef, editedTask?.title);
    setVal(descriptionRef, editedTask?.description);
    setVal(statusTaskRef, editedTask?.status);
    //i added list as a dependency to keep it in track
  }, [list]);

  //on submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    //get values
    const title = val(titleRef);
    const description = val(descriptionRef);
    const statusTask = val(statusTaskRef);

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
      const updatedTask = new TodoModel(
        Number(todoId),
        title,
        statusTask,
        description,
        ConnectedUserId
      );
      AxiosClient.put(`users/${ConnectedUserId}/todos/${todoId}`, {
        updatedTask,
      })
        .then((response) => {
          setIsLoading(false);
          setMessage(response?.data.msg);
          updatedTask.startedAt = response.data.startedAt;
          updatedTask.doneAt = response.data.doneAt;
          call(updateTaskFromAPI({ updatedTask }));
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.response?.data.msg);
        });
    }
    //vider linputs
    setVal(titleRef, "");
    setVal(descriptionRef, "");
    setVal(statusTaskRef, TodoStatus.TODO);
  };

  //hide alert
  const hideAlert = () => {
    setError("");
    setMessage("");
  };
  return { hideAlert, handleSubmit, isLoading, message, error };
};
