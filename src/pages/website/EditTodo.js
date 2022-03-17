import { EditTodo } from "components";
import { LayoutWebsite } from "layout";

export const EditTodoPage = () => {
  return (
    <LayoutWebsite>
      <h1 className="m-5">Edit Task</h1>
      <EditTodo />
    </LayoutWebsite>
  );
};
