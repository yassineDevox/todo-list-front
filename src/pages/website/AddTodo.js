import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddTodo from "components/AddTodo";
import { clearUserSession, loadUserFromLocalStorage } from "redux/ducks/auth";
import NavBar from "shared/navBar/NavBar";
import Footer from "shared/footer/footer";

export const AddTodoPage = () => {
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
    navTo("/");
  };

  return (
    <div className="text-center">
      <NavBar />
      <h1 className="m-5">Add Task</h1> 
      <AddTodo />
      <Footer />
    </div>
  );
};
