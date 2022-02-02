import { useRef } from "react";
import { connect } from "react-redux";
import { TodoModel } from "../model/todo";
import { TodoTypes } from "../shared/reducers/todo";

const AddTodo = (props) => {

    const title = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        //recuperer lavaleur de linput 
        props.addNewTask(title.current.value)
    }
    return (
        <>
            <h1>Add Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="title"
                ref={title} />
                <button type="submit">Save</button>
            </form>
        </>
    );
};

const AddTodoStore = connect(
    null,
    (dispatch)=>({
        addNewTask : (titleTask)=>dispatch({
            type:TodoTypes.add,
            payload:new TodoModel(2,titleTask)
        })
    })
)(AddTodo)

export default AddTodoStore