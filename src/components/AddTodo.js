import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/ducks/todo";

const AddTodo = () => {

    //define a title ref on the input to get the value of it 
    const title = useRef()
    //use dispatch hook to call the reducer's actions
    const dispatch = useDispatch()
    //get todo state from the store 
    const todos = useSelector(
        (StateStore) => StateStore.todos
    )

    //on submit form 
    const handleSubmit = (e) => {
        e.preventDefault()
        let newTitle = title.current.value
        let newId = todos.length + 1
        if (newTitle !== "") {
            dispatch(
                addTodo(
                    
                    {newId,newTitle}
                )
            )
            title.current.value = ""
        }
        else
            alert("invalid value 😥")

    }
    return (
        <>
            <h1>Add Task</h1>
            <form className="d-flex w-50 mx-auto align-items-center"
                onSubmit={handleSubmit}>
                <input
                    className="form-control m-1"
                    type="text"
                    placeholder="title"
                    ref={title} />
                <button
                    className="btn btn-success"
                    type="submit">
                    Save
                </button>
            </form>
        </>
    );
};

export default AddTodo