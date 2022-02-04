import { TodoModel } from "../../model/todo"
import { UserModel } from "../../model/user"

//types first 
const ADD_USER = "USER/add"
const DEL_USER = "USER/del"
const EDIT_USER = "USER/edit"

// define actions as a functions
export const addUser = (fn,ln,id,avatar) => ({
    type: ADD_USER,
    payload: new UserModel(id,fn,ln,avatar)
})

export const delUser = (deletedID) => ({
    type: DEL_USER,
    payload: deletedID
})

export const editUser = (updatedUser) => ({
    type: EDIT_USER,
    payload: updatedUser
})

//define the initial state : array of todos 
const initialState = []

//define the todo reducer

const userReducer = (state = initialState, action) => {

    //destruct type and payload from action obj
    const { type, payload } = action

    switch (type) {

        case ADD_USER:
            return [
                ...state, { ...payload }
            ]

        case DEL_USER:
            return [
                ...state.filter(u => u.id != payload)
            ]

        case EDIT_USER:
            return [
                ...state.map(u => {
                    if (u.id === payload.id)
                        u = { ...payload }
                    return u
                })
            ]
        default:
            return state
    }
}

export default userReducer