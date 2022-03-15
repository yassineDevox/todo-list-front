import React from "react";
import { useSelector } from "react-redux";
import "assets/style/todo.css";
import Todo from "./Todo";

const ListTodo = () => {
  // get tasks from redux store
  const myTasks = useSelector((s) =>{
    if(s.filter.query==="")  
    return s.task.list
    else 
    return s.task.list.filter(t=>t.title.includes(s.filter.query))
    });

  return (
    <>
      <ul className="list-group w-50 mx-auto list-group-flush">
        {myTasks.length === 0
          ? "List Empty 😇 !"
          : myTasks.map((t) => <Todo key={t.id} t={t} />)}
      </ul>
      <div></div>
    </>
  );
};

export default ListTodo;
