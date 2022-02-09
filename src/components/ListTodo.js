import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TodoModel } from '../model/todo';
import {
    delTodo,
    editTodo,
    isLoadingSelector,
    listTodoSelector,
    loadTodos
} from '../redux/ducks/todo';
import Modal from '../shared/modal/modal';
import Paggination from '../shared/paggination/paggination';
import Spinner from '../shared/spinner/spinner';
import Todo from './Todo';

const ListTodo = () => {


    //usedispatch to call reducer's actions 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTodos({limit:10}))
    }, [dispatch])

    //get the todos state from the reducer todo
    const todos = useSelector(s => listTodoSelector(s.todos))
    const isLoading = useSelector(s => isLoadingSelector(s.todos))

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
                    isLoading ? <Spinner /> : todos.map(
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
            <Paggination currentPage={1}/>
            <div>
                {/* Modal */}
                <Modal
                    handleUpdate={handleUpdate}
                    setTaskCompleted={setTaskCompleted}
                    isTaskCompleted={isTaskCompleted}
                    titleRef={titleRef}
                />
            </div>

        </>


    )
};


export default ListTodo