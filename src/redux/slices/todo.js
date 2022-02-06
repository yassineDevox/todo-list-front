
const { createSlice, createAction } = require("@reduxjs/toolkit");

//actions for sagas
export const addTodo = createAction("todos/add")
export const delTodo = createAction("todos/del")
export const editTodo = createAction("todos/edit")
export const loadTodos = createAction("todos/load")




const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        todoAdded(state, { payload }) {
            console.log(payload);
            state.push(payload)
        },
        todoDeleted(state, { payload }) {
            return [...state.filter(
                t => t.id !== payload
            )]
        },
        todoUpdated(state, { payload: { title, completed, id } }) {
            let todo = state.find(
                t => t.id === id
            )
            if (todo) {
                todo.title = title
                todo.completed = completed
            }
        },
        todosLoadded(_, { payload }) {
            return [...payload]
        }
    }
})

export const {
    todoAdded,
    todoDeleted,
    todoUpdated,
    todosLoadded
} = todoSlice.actions
export default todoSlice.reducer