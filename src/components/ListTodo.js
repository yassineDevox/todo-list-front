import React, { useRef, useState } from 'react';
import "./../assets/style/todo.css"

const ListTodo = () => {



    //ref on input title 
    const titleRef = useRef()

    //use state to define completed 
    const [isTaskCompleted, setTaskCompleted] = useState(0);

    //use state to store the selected id for editTask
    const [selectedID, setSelectedID] = useState(0);

    //onHandle Delete task 
    const handleDelete = (deletedID) => {
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
    }

    return (
        <>
            <ul className='list-group w-50 mx-auto list-group-flush'>
                {
                  
                }
            </ul>
            <div>
            </div>

        </>


    )
};


export default ListTodo