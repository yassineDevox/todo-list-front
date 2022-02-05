
const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {

        addTodo(state, { payload }) {
            state.push(payload)
        },
        delTodo(state, { payload }) {
            return [...state.filter(
                t => t.id !== payload
            )]
        },
        editTodo(state, { payload: { title, completed, id } }) {
            let todo = state.find(
                t => t.id === id
            )
            if (todo) {
                todo.title = title
                todo.completed = completed
            }
        },
        getAllTodos() { },
        setAllTodos(_, { payload }) {
            return [...payload]
        }
    }
})

export const {
    addTodo,
    delTodo,
    editTodo,
    getAllTodos,
    setAllTodos
} = todoSlice.actions
export default todoSlice.reducer