import { USE_HOOK } from "hooks/hooks";
import { TodoForm } from "layout/todo-form";
import { Message } from "shared";

export const AddTodo = () => {
  const {
    handleOnFocus,
    handleSubmit,
    isLoading,
    error,
    message,
    titleRef,
    descriptionRef,
    statusTaskRef,
  } = USE_HOOK.useAddTodo();

  return (
    <>
      <TodoForm
        data={{ titleRef, descriptionRef, statusTaskRef, isLoading }}
        handlers={{ handleOnFocus, handleSubmit }}
      />
      <Message content={message} color="success" />
      <Message content={error}  />
    </>
  );
};
