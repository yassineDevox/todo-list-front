import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TodoModel } from '../model/todo';
import { delTodo, editTodo } from '../redux/ducks/todo';
import Todo from './Todo';

const ListTodo = () => {

    //get the todos state from the reducer todo
    const todos = useSelector((stateStore) => stateStore.todo)

    //usedispatch to call reducer's actions 
    const dispatch = useDispatch()

    //ref on input title 
    const titleRef = useRef()

    //use state to define completed 
    const [isTaskCompleted, setTaskCompleted] = useState(0);

    //use state to store the selected id for editTask
    const [selectedID, setSelectedID] = useState(0);

    //onHandle Delete task 
    const handleDelete = (deletedID) => {
        dispatch(delTodo(deletedID))
    }

    //handle Edit task (step 1 : show modal )
    const showModalEdit = (id, titleTask, completed) => {
        //store the id 
        setSelectedID(id)
        //give the titleTask to the model Edit
        titleRef.current.value = titleTask
        //set the completed value of the task 
        setTaskCompleted(completed)
    }

    //handle Edit task ( step 2 : call reducer's action)
    const handleUpdate = () => {
        dispatch(
            editTodo(
                new TodoModel(
                    selectedID,
                    titleRef.current.value,
                    isTaskCompleted)
            )
        )
    }

    return (
        <>
            <ul className='list-group w-50 mx-auto list-group-flush'>
                {
                    todos.map(
                        t => <Todo
                            handleDelete={handleDelete}
                            handleEdit={showModalEdit}
                            key={t.id}
                            id={t.id}
                            title={t.title}
                            isCompleted={t.completed}
                        />
                    )
                }
            </ul>
            <div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">

                                <input
                                    className="form-control m-1"
                                    type="text"
                                    placeholder="title"
                                    ref={titleRef} />

                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input"
                                            type="radio"
                                            id="flexRadioDefault1"
                                            name="r"
                                            checked={isTaskCompleted}
                                            onChange={
                                                () => setTaskCompleted(!isTaskCompleted)
                                            } />
                                        <label className="form-check-label"
                                            htmlFor="flexRadioDefault1">
                                            Completed
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input"
                                            type="radio"
                                            id="flexRadioDefault2"
                                            name="r"
                                            checked={!isTaskCompleted}
                                            onChange={() => setTaskCompleted(!isTaskCompleted)} />
                                        <label className="form-check-label"
                                            htmlFor="flexRadioDefault2">
                                            In Progress
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary"
                                    onClick={handleUpdate}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
};


export default ListTodo