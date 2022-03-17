import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadTasksFromAPI } from "redux/ducks/task";
import { AxiosClient } from "tools/axios";

export const USE_HOOK = {
  useFetchTodos,
  useFetchTodoDetails,
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
      AxiosClient.get(`/users/${connectedUserId}/todos`)
        .then((response) => {
          setIsLoading(false);
          call(loadTasksFromAPI(response.data));
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
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
    AxiosClient.get(`/todos/${todoId}`)
      .then((r) => {
        setIsLoading(false);
        setTodo(r.data.todo);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return { isLoading, todo };
};


//____ADD-TODO_____