import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import "./../assets/style/todo.css"
import Todo from './Todo';

const ListTodo = () => {
    // get tasks from redux store 
    const myTasks = useSelector(s=>s.task.list)

    return (
        <>
            <ul className='list-group w-50 mx-auto list-group-flush'>
                {
                 myTasks.map(t=><Todo key={t.id} t={t}/>) 
                }
                {
                    myTasks.length===0 ? "List Empty 😇 !" :""
                }
            </ul>
            <div>
            </div>

        </>


    )
};


export default ListTodo