import { TodoModel } from "../../model/todo"

//types first 
const ADD_TODO = "todo/add"
const DEL_TODO = "todo/del"
const EDIT_TODO = "todo/edit"

// define actions as a functions
export const addTodo = (titleTask,id) => ({
    type: ADD_TODO,
    payload: new TodoModel(id, titleTask)
})

export const delTodo = (deletedID) => ({
    type: DEL_TODO,
    payload: deletedID
})

export const editTodo = (updatedTask) => ({
    type: EDIT_TODO,
    payload: updatedTask
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
                ...state.filter(t => t.id != payload)
            ]

        case EDIT_TODO:
            return [
                ...state.map(t => {
                    if (t.id === payload.id)
                        t = { ...payload }
                    return t
                })
            ]
        default:
            return state
    }
}

export default todoReducer