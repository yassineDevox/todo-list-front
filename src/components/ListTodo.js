import { useSelector } from "react-redux";
import { useHelper } from "helpers/helpers";
import { Todo } from "./Todo";
import "assets/style/todo.css";

export const ListTodo = () => {

  const myTasks = useSelector(useHelper.SELECTOR.tasks);

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

