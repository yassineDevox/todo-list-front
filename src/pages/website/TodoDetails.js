import { Spinner } from "shared";
import { TodoDetails } from "components";
import { LayoutWebsite } from "layout";
import { USE_HOOK } from "hooks/hooks";

export const TodoDetailsPage = () => {

  const { isLoading, todo } = USE_HOOK.useFetchTodoDetails();
  
  return (
    <LayoutWebsite>
      <h1 className="m-3">TodoDetails</h1>
      <div className="m-3">
        {isLoading ? <Spinner /> : <TodoDetails t={todo} />}
      </div>
    </LayoutWebsite>
  );
};
