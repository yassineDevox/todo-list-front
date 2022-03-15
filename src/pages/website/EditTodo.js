import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    loadUserFromLocalStorage,
} from "redux/ducks/auth";
import NavBar from "shared/navBar/NavBar";
import EditTodo from "components/EditTodo";
import Footer from "shared/footer/footer";

export const EditTodoPage = () => {

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
      <h1 className="m-5">Add Task</h1>
      <EditTodo />
      <Footer />
    </div>
  )
}