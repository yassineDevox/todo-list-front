import { TodoApi } from "api/todo";
import { useHelper } from "helpers/helpers";
import { TodoModel, TodoStatus } from "model";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  addTaskFromAPI,
  deleteTaskFromAPI,
  loadTasksFromAPI,
  updateTaskFromAPI,
} from "redux/ducks/task";

const {
  UTIL: { If, callApi },
  VALIDATION: {
    isEmpty,
    isUndefined,
    isThereAnInputEmpty,
    inTaskStatusVals,
    isNull,
  },
  SELECTOR: { tasksAndUserId, userId },
  REF: { set, get },
} = useHelper;

//_______LIST_TODO __________
const useFetchTodos = () => {
  const { userId, mytasks } = useSelector((s) => tasksAndUserId(s));

  const [isLoading, setLoading] = useState(false);

  const call = useDispatch();

  useEffect(() => {
    const getAllTodos = () => TodoApi.getAll(userId);
    const loadTasksInRedux = (val) => call(loadTasksFromAPI(val));

    If(
      isUndefined(userId) && isEmpty(mytasks),
      callApi(getAllTodos, setLoading, null, loadTasksInRedux)
    );
  }, [userId, mytasks, call]);

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
  }, [todoId]);

  return { isLoading, todo, error };
};

//____ADD-TODO_____

const useAddTodo = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusTaskRef = useRef();

  const UID = useSelector((s) => userId(s));

  const call = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitTodoForm(
      setLoading,
      setMessage,
      setError,
      titleRef,
      descriptionRef,
      statusTaskRef,
      call,
      UID
    );
  };

  const handleOnFocus = () => (error ? setError("") : setMessage(""));

  return {
    handleOnFocus,
    handleSubmit,
    isLoading,
    message,
    error,
    titleRef,
    descriptionRef,
    statusTaskRef,
  };
};

//___EDIT-TODO____
const useEditTodo = () => {
  const { userId, mytasks } = useSelector((s) => tasksAndUserId(s));

  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusTaskRef = useRef();

  const call = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { todoId } = useParams();

  useEffect(() => {
    const editedTask = mytasks.find((t) => t.id === Number(todoId));
    set(titleRef, editedTask?.title);
    set(descriptionRef, editedTask?.description);
    set(statusTaskRef, editedTask?.status);
  }, [userId, mytasks, todoId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitTodoForm(
      setLoading,
      setMessage,
      setError,
      titleRef,
      descriptionRef,
      statusTaskRef,
      call,
      userId
    );

    //vider linputs
    set(titleRef, "");
    set(descriptionRef, "");
    set(statusTaskRef, TodoStatus.TODO);
  };

  const handleOnFocus = () => (error ? setError("") : setMessage(""));

  return { handleOnFocus, handleSubmit, isLoading, message, error ,
    titleRef,
    descriptionRef,
    statusTaskRef,};
};

//___TODO-DELETE___
const useDeleteTodo = (t = new TodoModel()) => {
  const [isLoadoing, setLoadoing] = useState(false);
  const userId = useSelector((s) => userId(s));
  const call = useDispatch();
  const navTo = useNavigate();

  const handleClickDelete = () => {
    const deleteTaskById = () => TodoApi.delete(t.id);
    const onSuccess = () => call(deleteTaskFromAPI({ todoId: t.id }));

    If(
      window.confirm("Are you sure 😨 ?"),
      callApi(deleteTaskById, setLoadoing, null, onSuccess)
    );
  };

  const handleClickEdit = () => navTo(`/todo/edit/${t.id}`);
  const handleClickMoreDetails = () => navTo(`/todo/${t.id}/details`);

  return {
    isLoadoing,
    handleClickEdit,
    handleClickDelete,
    handleClickMoreDetails,
  };
};

//___common-func____
const onSubmitTodoForm = (
  setLoading,
  setError,
  setMessage,
  titleRef,
  descriptionRef,
  statusTaskRef,
  dispatch,
  userId,
  todoId = null
) => {
  const formData = {
    1: get(titleRef),
    2: get(descriptionRef),
    3: get(statusTaskRef),
  };
  if (isThereAnInputEmpty(formData)) alert("Empty values error 😈 !");
  else if (inTaskStatusVals(formData[3]))
    alert("Invalid status task value 😈 !");
  else {
    const postTodo = () => {
      (isNull(todoId) ? TodoApi.add : TodoApi.edit)(
        new TodoModel(todoId, ...formData, userId)
      );
    };

    const onSuccess = (data) => {
      setMessage(data.msg);
      dispatch((isNull(todoId) ? addTaskFromAPI : updateTaskFromAPI)(data.todo));
    };

    callApi(postTodo, setLoading, setError, onSuccess);

    set(titleRef, "");
    set(descriptionRef, "");
    set(statusTaskRef, TodoStatus.TODO);
  }
};

export const USE_HOOK = {
  useFetchTodos,
  useFetchTodoDetails,
  useAddTodo,
  useEditTodo,
  useDeleteTodo,
};
