import TodoDetails from "components/TodoDetails";
import { TodoStatus } from "model";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadUserFromLocalStorage } from "redux/ducks/auth";
import Footer from "shared/footer/footer";
import NavBar from "shared/navBar/NavBar";
import Spinner from "shared/spinner/spinner";
import AxiosClient from "tools/axios";

const getColor = (content) => {
    switch (content) {
      case TodoStatus.TODO:
        return "primary";
      case TodoStatus.DONE:
        return "success";
      case TodoStatus.INPROGRESS:
        return "info";
      case TodoStatus.CANCELED:
        return "danger";
    }
  };
  

const TodoDetailsPage = () => {
  //state
  const [todo, setTodo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //call redux action
  const call = useDispatch();
  
  //when page is loaded (comp did mount)
  useEffect(() => {
    //call loadUserFromLocalStorage action
    call(loadUserFromLocalStorage());
  }, []);

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
  return (
    <>
      <NavBar />
      <h1 className="text-center m-3">TodoDetails</h1>
      <div className="text-center m-3">
        {isLoading ? <Spinner color={getColor(todo.status)} /> : <TodoDetails t={todo} />}
      </div>
      <Footer />
    </>
  );
};

export default TodoDetailsPage;
