import { LayoutWebsite } from "layout";
import { Spinner } from "shared";
import { ListTodo } from "components";
import { USE_HOOK } from "hooks/hooks";

export const ListTodoPage = () => {

  const { isLoading } = USE_HOOK.useFetchTodos();
  
  return (
    <LayoutWebsite>
      <h1 className="m-5">List des Taches </h1>
      {isLoading ? <Spinner /> : <ListTodo />}
    </LayoutWebsite>
  );
};
