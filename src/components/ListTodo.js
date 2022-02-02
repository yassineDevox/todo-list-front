import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const ListTodo = (props) => {
    console.log(props.list);
    return <ul>
        {props.list.map(
            t => <Todo
                key={t.id}
                id={t.id}
                title={t.title}
            />)}
    </ul>;
};


//on va connecter todoList avec le store 
//param1 : state 
//param2 : action dans se cas la il est null 
//list : le nom de la propiete lier a ListTodo
const ListTodoStore = connect(
    (todoState) => (
    {
        list:todoState
    }))(ListTodo)

export default ListTodoStore
