import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoModel } from "../../model/todo";

//async thunk api 
export const loadTodos = createAsyncThunk("loadTodos", async ({ limit }) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(list => ({ list, limit }))
})

//reducer with actions 
const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [],
        isLoading: true,
        limitAt: 5,
        page: 1
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
            const { title, id, completed } = payload
            state.list.forEach(t => {
                if (t.id === id) {
                    t.title = title
                    t.completed = completed
                }
            })
        },
        setPage(state, { payload }) {
            state.page = payload
        }

    }, extraReducers: {
        [loadTodos.fulfilled]: (state, { payload: { list, limit } }) => {
            state.isLoading = false
            state.list = list
            state.limitAt = limit
        }
    }
})

//selectors 

export const listTodoSelector = s =>
    [...s.list.filter((_, i) => i < s.limitAt * s.page && i > s.limitAt * (s.page - 1))]


//export 
export const {
    addTodo,
    delTodo,
    editTodo,
    setPage
} = todoSlice.actions

export default todoSlice.reducer