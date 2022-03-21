import { TodoApi } from "api/todo";
import { useHelper } from "helpers/helpers";
import { TodoModel, TodoStatus } from "model";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setFilter } from "redux/ducks/filter";

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
    isThereAnInputEmpty,
    inTaskStatusVals,
    isNull,
    isUndefined,
  },
  SELECTOR: { tasksAndUserId, userId },
  REF: { set, get },
} = useHelper;

//_______LIST_TODO __________
const useFetchTodos = () => {
  const { userId, mytasks } = useSelector((s) => tasksAndUserId(s));
  const [isLoading, setLoading] = useState(false);
  const call = useDispatch();

  useEffect(() => call(setFilter("")), []);

  useEffect(() => {
    const getAllTodos = () => TodoApi.getAll(userId);
    const loadTasksInRedux = (val) => call(loadTasksFromAPI(val));
    If(
      isEmpty(mytasks) && !isUndefined(userId),
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
    const displayTodoDetails = (data) => setTodo(data.todo);
    If(
      !isEmpty(todoId),
      callApi(getTodoById, setLoading, setError, displayTodoDetails)
    );
  }, [todoId]);

  return { isLoading, todo, error };
};

//____ADD-TODO_____
const usePostTodo = (p) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusTaskRef = useRef();

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
      p.UID,
      p.todoId
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

const useAddTodo = () => {
  const UID = useSelector((s) => userId(s));
  return usePostTodo({ UID, todoId: null });
};

//___EDIT-TODO____
const useEditTodo = () => {
  const { userId, mytasks } = useSelector((s) => tasksAndUserId(s));
  const { todoId } = useParams();

  const postTodo = usePostTodo({ UID: userId, todoId });

  useEffect(() => {
    const editedTask = mytasks.find((t) => t.id === Number(todoId));
    set(postTodo.titleRef, editedTask?.title);
    set(postTodo.descriptionRef, editedTask?.description);
    set(postTodo.statusTaskRef, editedTask?.status);
  }, [userId, mytasks, todoId]);

  return postTodo;
};

//___TODO-DELETE___
const useDeleteTodo = (t = new TodoModel()) => {
  const [isLoadoing, setLoadoing] = useState(false);
  const UID = useSelector((s) => userId(s));
  const call = useDispatch();
  const navTo = useNavigate();

  const handleClickDelete = () => {
    const deleteTaskById = () => TodoApi.delete(t.id, UID);
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

const clearForm = (t, d, s) => {
  set(t, "");
  set(d, "");
  set(s, TodoStatus.TODO);
};

const getFormData = (t, d, s) => ({
  title: get(t),
  description: get(d),
  status: get(s),
});

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
  const FD = getFormData(titleRef, descriptionRef, statusTaskRef);
  if (isThereAnInputEmpty(FD)) alert("Empty values error 😈 !");
  else if (inTaskStatusVals(FD.status)) alert("Invalid status task value 😈 !");
  else {
    const postTodo = () => {
      let f = isNull(todoId) ? TodoApi.add : TodoApi.edit;
      return f(
        new TodoModel(todoId, FD.title, FD.status, FD.description, userId),
        userId
      );
    };

    const onSuccess = (data) => {
      setMessage(data.msg);
      isNull(todoId)
        ? dispatch(addTaskFromAPI(data.todo))
        : dispatch(updateTaskFromAPI({ updatedTask: data.todo }));
    };

    callApi(postTodo, setLoading, setError, onSuccess)();
    if (isNull(todoId)) clearForm(titleRef, descriptionRef, statusTaskRef);
  }
};

export const USE_HOOK = {
  useFetchTodos,
  useFetchTodoDetails,
  useAddTodo,
  useEditTodo,
  useDeleteTodo,
};
