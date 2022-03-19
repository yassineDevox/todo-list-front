import { USE_HOOK } from "hooks/hooks";
import { TodoForm } from "layout/todo-form";
import { Message } from "shared";

export const EditTodo = () => {
  const {
    handleOnFocus,
    handleSubmit,
    error,
    isLoading,
    message,
    titleRef,
    descriptionRef,
    statusTaskRef,
  } = USE_HOOK.useEditTodo();

  return (
    <>
      <TodoForm
        data={{ titleRef, descriptionRef, statusTaskRef, isLoading }}
        handlers={{ handleOnFocus, handleSubmit }}
        action="update"
      />
      <Message content={message} />
      <Message content={error} color="danger" />
    </>
  );
};
