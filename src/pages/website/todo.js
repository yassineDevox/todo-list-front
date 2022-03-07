import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddTodo from "components/AddTodo";
import ListTodo from "components/ListTodo";
import {
  clearUserSession,
  loadUserFromLocalStorage,
} from "redux/ducks/auth";

export const TodoPage = () => {
  //route
  const navTo = useNavigate();
  //get global state from redux's store
  const user = useSelector((s) => s.auth.user);
  //call redux action
  const call = useDispatch();
  //when page is loaded (comp did mount)
  useEffect(() => {
    //call loadUserFromLocalStorage action
    call(loadUserFromLocalStorage());
  }, []);

  //logout ui action
  const handleClickLogout = () => {
    //call logout action
    call(clearUserSession());
    //redirect to login page
    navTo("/")
  };

  return (
    <div className="text-center">
      <div className="d-flex justify-content-between mx-auto w-75 m-1 p-2">
        <h4>Hello : {user?.firstname}</h4>
        <button onClick={handleClickLogout} className="btn btn-warning">
          <i className="fas fa-power-off"></i>
        </button>
      </div>
      {/* <img src = {user?.avatarURL} height={100}/> */}
      <AddTodo />
      <hr />
      <h1>List des Taches </h1>
      <ListTodo />
    </div>
  );
};

