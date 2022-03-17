import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddTodo from "components/AddTodo";
import { loadUserFromLocalStorage } from "redux/ducks/auth";
import NavBar from "shared/navBar/NavBar";
import Footer from "shared/footer/footer";

export const AddTodoPage = () => {

  //call redux action
  const call = useDispatch();
  //when page is loaded (comp did mount)
  useEffect(() => {
    //call loadUserFromLocalStorage action
    call(loadUserFromLocalStorage());
  }, []);

  //logout ui action

  return (
    <div className="text-center">
      <NavBar />
      <h1 className="m-5">Add Task</h1> 
      <AddTodo />
      <Footer />
    </div>
  );
};
