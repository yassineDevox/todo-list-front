import { USE_HOOK } from "hooks/hooks";
import { TodoStatus } from "model";
import { Message, Spinner } from "shared";

export const AddTodo = () => {

  const { 
    handleOnFocus,
     handleSubmit,
     isLoading,
     error,
     message,
     titleRef,
     descriptionRef,
     statusTaskRef } = USE_HOOK.useAddTodo();

  return (
    <>
      <form
        className="d-flex flex-column gap-3 w-50 mx-auto align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="form-floating">
          <input
            onFocus={handleOnFocus}
            className="form-control m-1"
            type="text"
            placeholder="title"
            ref={titleRef}
            id="1"
          />
          <label htmlFor="1">Title task </label>
        </div>
        <div className="form-floating">
          <textarea
            onFocus={handleOnFocus}
            className="form-control"
            placeholder="Leave a description here"
            id="floatingTextarea"
            ref={descriptionRef}
          />
          <label htmlFor="floatingTextarea">Description</label>
        </div>
        <select
          onFocus={handleOnFocus}
          ref={statusTaskRef}
          className="form-select"
          aria-label="Default select example"
        >
          <option value={TodoStatus.TODO}>Todo</option>
          <option value={TodoStatus.INPROGRESS}>In Progress</option>
          <option value={TodoStatus.CANCELED}>Canceled</option>
          <option value={TodoStatus.DONE}>Done</option>
        </select>

        <button className="btn btn-success" type="submit">
          {isLoading ? <Spinner color="light" /> : null} Save
        </button>
      </form>
      
      <Message content={message}/>
      <Message content={error} color="danger" />
      
    </>
  );
};
