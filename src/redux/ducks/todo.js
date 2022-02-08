import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoModel } from "../../model/todo";

//async thunk 
export const loadTodos = createAsyncThunk("loadTodos", async (action) => {
    console.log(action)
    return fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => action.payload = json)
})


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [],
        isLoading: true
    },
    reducers: {
        addTodo(state, { payload }) {
            state.list.push(new TodoModel(payload.newId, payload.newTitle))
        },
        delTodo(state, { payload }) {
            console.log(payload)
            state.list.forEach((t, index) => {
                if (t.id === payload) {
                    state.splice(index, 1)
                }
            })
        },
        editTodo(state, { payload }) {
            console.log(payload)
            const { title, id, completed } = payload
            state.list.forEach(t => {
                if (t.id === id) {
                    t.title = title
                    t.completed = completed
                }
            })
        }
    }, extraReducers: {
        [loadTodos.fulfilled]: (state, action) => {
            state.isLoading=false
            state.list = action.payload
            console.log(state, action)
        }
    }
})

export const {
    addTodo,
    delTodo,
    editTodo
} = todoSlice.actions

export default todoSlice.reducer