import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListTodo from "components/ListTodo";
import { loadUserFromLocalStorage } from "redux/ducks/auth";
import NavBar from "shared/navBar/NavBar";
import AxiosClient from "tools/axios";
import Spinner from "shared/spinner/spinner";
import { loadTasksFromAPI } from "redux/ducks/task";

export const ListTodoPage = () => {
  //redux store 
  const connectedUserId = useSelector(s=>s.auth.user.id)
  const listTask = useSelector(s=>s.task.list)
  //state
  const [isLoading, setIsLoading] = useState(false);
  //call redux action
  const call = useDispatch();
  //when page is loaded (comp did mount)
  useEffect(() => {
    //call loadUserFromLocalStorage action
    call(loadUserFromLocalStorage());
    //get all todos of connected user
    if(connectedUserId!==undefined && listTask.length===0)
    {
      setIsLoading(true);
      AxiosClient.get(`/users/${connectedUserId}/todos`)
      .then((response) => {
        setIsLoading(false);
        call(loadTasksFromAPI(response.data))
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
    }
  }, [connectedUserId]);

  return (
    <div className="text-center">
      <NavBar />
      <h1 className="m-5">List des Taches </h1>
      {isLoading ? <Spinner /> : <ListTodo />}

    </div>
  );
};
