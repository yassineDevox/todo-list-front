import { TodoModel } from "../../model/todo"

//types first 
const ADD_TODO = "todo/add"
const DEL_TODO = "todo/del"
const EDIT_TODO = "todo/edit"
export const GET_ALL_TODOS = "todo/get-all"
const SET_LIST_TODOS = "todo/set-list"


// define actions as a functions
export const addTodo = (titleTask) => ({
    type: ADD_TODO,
    payload: new TodoModel(1, titleTask)
})

export const delTodo = (deletedID) => ({
    type: DEL_TODO,
    payload: { deletedID }
})

export const editTodo = (updatedTask) => ({
    type: EDIT_TODO,
    payload: updatedTask
})

export const setAllTodos = (todos) => ({
    type: SET_LIST_TODOS,
    payload: todos
})

export const getAllTodos = () => ({
    type: GET_ALL_TODOS,
})

//define the initial state : array of todos 
const initialState = []

//define the todo reducer

const todoReducer = (state = initialState, action) => {

    //destruct type and payload from action obj
    const { type, payload } = action

    switch (type) {

        case ADD_TODO:
            return [
                ...state, { ...payload }
            ]

        case DEL_TODO:
            return [
                ...state.filter(t => t.id != payload.deletedID)
            ]

        case EDIT_TODO:
            return [
                ...state.map(t => {
                    if (t.id === payload.id)
                        t = { ...payload }
                    return t
                })
            ]
        case SET_LIST_TODOS:
            return [...payload]

        default:
            return state
    }
}

export default todoReducer