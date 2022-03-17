import { AddTodo } from "components";
import { LayoutWebsite } from "layout";

export const AddTodoPage = () => {
  
  return (
    <LayoutWebsite>
      <h1 className="m-5">Add Task</h1>
      <AddTodo />
    </LayoutWebsite>
  );
};
