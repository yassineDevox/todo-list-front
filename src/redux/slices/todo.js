const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo(state, { payload }) {
            state.push(payload)
        },
        delTodo(state, { payload: { deletedID } }) {
            state = [...state.filter(
                t => t !== deletedID
            )]
        },
        editTodo(state, { updatedTodo }) {
            const todo = state.find(
                t => t.id === updatedTodo.id
            )
            if (todo) {
                todo = { ...updatedTodo }
            }
        },
        getAllTodos() { },
        setAllTodos(state, { payload }) {
            state = payload
        }
    }
})

export const { addTodo, delTodo, editTodo,getAllTodos,setAllTodos } = todoSlice.actions
export default todoSlice.reducer