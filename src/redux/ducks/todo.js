import { createSlice } from "@reduxjs/toolkit";
import { TodoModel } from "../../model/todo";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo(state, {payload}) {
            state.push(new TodoModel(payload.newId, payload.newTitle))
        },
        delTodo(state, { payload }) {
            console.log(payload)
            state.forEach((t, index) => {
                if (t.id === payload) {
                    state.splice(index, 1)
                }
            })
        },
        editTodo(state, { payload }) {
            console.log(payload)
            const { title, id, completed } = payload
            state.forEach(t => {
                if (t.id === id) {
                    t.title = title
                    t.completed = completed
                }
            })
        }
    }
})

export const {
    addTodo,
    delTodo,
    editTodo
} = todoSlice.actions

export default todoSlice.reducer