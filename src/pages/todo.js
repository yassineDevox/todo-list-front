import React from 'react'
import AddTodo from '../components/AddTodo'
import ListTodo from '../components/ListTodo'

const TodoPage = () => {
    return (
        <div className='text-center'>
            <AddTodo />
            <hr />
            <h1>List des Taches </h1>
            <ListTodo />
        </div>
    )
}

export default TodoPage