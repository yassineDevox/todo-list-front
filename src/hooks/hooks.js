import { TodoApi } from "api/todo";
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
  useDeleteTodo,
};

const {
  UTIL: { If, callApi },
  VALIDATION: { isEmpty, isUndefined },
} = useHelper;

//_______LIST_TODO __________
const useFetchTodos = () => {
  const { userId, mytasks } = useSelector((s) => ({
    userId: s.auth.user.id,
    mytasks: s.task.list,
  }));

  const [isLoading, setLoading] = useState(false);

  const call = useDispatch();

  useEffect(() => {
    const getAllTodos = () => TodoApi.getAll(userId);
    const loadTasksFromAPI = (val) => call(loadTasksFromAPI(val));

    If(
      isUndefined(userId) && isEmpty(mytasks),
      callApi(getAllTodos, setLoading, setError, loadTasksFromAPI)
    );
  }, [userId]);

  return { isLoading };
};

//______TODO-DETAILS________
const useFetchTodoDetails = () => {
  const [todo, setTodo] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { todoId } = useParams();

  useEffect(() => {
    const getTodoById = () => TodoApi.get(todoId);
    const displayTodoDetails = (val) => setTodo(val);

    callApi(getTodoById, setLoading, setError, displayTodoDetails);
  }, []);

  return { isLoading, todo, error };
};

//____ADD-TODO_____

const useAddTodo = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusTaskRef = useRef();

  const ConnectedUserId = useSelector((s) => s.auth.user.id);

  const call = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = useHelper.getRefVal(titleRef);
    const description = useHelper.getRefVal(descriptionRef);
    const statusTask = useHelper.getRefVal(statusTaskRef);

    //validation des donnee
    if (
      useHelper.VALIDATION.isThereAnInputEmpty({
        title,
        description,
        statusTask,
      })
    )
      alert("Empty values error 😈 !");
    else if (useHelper.VALIDATION.inTaskStatusVals(statusTask)) {
      alert("Invalid status task value 😈 !");
    } else {

      const postTodo = () =>
        TodoApi.add(
          new TodoModel(null, title, statusTask, description, ConnectedUserId)
        );

      const onSuccess = (data) => {
        setMessage(data.msg);
        call(addTaskFromAPI(data.todo));
      };

      callApi(postTodo, setLoading, setError, onSuccess)
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

  const { userId, mytasks } = useSelector((s) => ({
    userId: s.auth.user.id,
    mytasks: s.task.list,
  }));


  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusTaskRef = useRef();

  //redux actions
  const call = useDispatch();

  //state
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
        userId
      );
      AxiosClient.put(`users/${userId}/todos/${todoId}`, {
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

//___TODO-DELETE___
const useDeleteTodo = () => {
  //state
  const [isLoadoing, setIsLoadoing] = useState(false);
  //get connectedUserId from redux store
  const connectedUserId = useSelector((s) => s.auth.user.id);
  //redux actions
  const call = useDispatch();
  //router
  const navTo = useNavigate();

  //_____Actions___
  const handleClickDelete = () => {
    //use axios to delete task
    if (window.confirm("Are you sure 😨 ?")) {
      setIsLoadoing(true);
      AxiosClient.delete(`users/${connectedUserId}/todos/${t.id}`)
        .then((_) => {
          call(deleteTaskFromAPI({ todoId: t.id }));
          setIsLoadoing(false);
        })
        .catch((_) => {
          setIsLoadoing(false);
        });
    }
  };

  const handleClickEdit = () => {
    navTo(`/todo/edit/${t.id}`);
  };

  const handleClickMoreDetails = () => {
    navTo(`/todo/${t.id}/details`);
  };

  return {
    isLoadoing,
    handleClickEdit,
    handleClickDelete,
    handleClickMoreDetails,
  };
};
