import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListTodo from "components/ListTodo";
import { loadUserFromLocalStorage } from "redux/ducks/auth";
import NavBar from "shared/navBar/NavBar";

export const ListTodoPage = () => {
  
  //call redux action
  const call = useDispatch();
  //when page is loaded (comp did mount)
  useEffect(() => {
    //call loadUserFromLocalStorage action
    call(loadUserFromLocalStorage());
  }, []);

  return (
    <div className="text-center">
      <NavBar/>
      <h1 className="m-5">List des Taches </h1>
      <ListTodo />
    </div>
  );
};
