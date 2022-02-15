import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StudentModel } from "../../model/student";
import client from "../../tools/axios";

//async thunk api 
export const loadStudents = createAsyncThunk("student/all", async ({ limit }) => {
    return client.get('/students')
        .then(response => response.json())
        .then(list => ({ list, limit }))
})

//reducer with actions 
const studentSlice = createSlice({
    name: "student",
    initialState: {
        list: [],
        isLoading: true,
        limitAt: 5, 
        page: 1
    },
    reducers: {
        add(state, { payload: {} }) {
            state.list.push(
                new StudentModel()
            )
        },
        del(state, { payload }) {
            state.list.forEach((t, index) => {
                if (t.id === payload) {
                    state.splice(index, 1)
                }
            })
        },
        edit(state, { payload }) {
            const { id } = payload
            state.list.forEach(t => {
                if (t.id === id) {
                    t = { ...t, ...payload }
                }
            })
        },
        setPage(state, { payload }) {
            state.page = payload
        }

    }, extraReducers: {
        [loadStudents.fulfilled]: (state, { payload: { list, limit } }) => {
            state.isLoading = false
            state.list = list
            state.limitAt = limit
        }
    }
})

//selectors 

export const listStudentSelector = s =>
    [...s.list.filter((_, i) => i < s.limitAt * s.page && i > s.limitAt * (s.page - 1))]


//export 
export const {
    add,
    del,
    edit,
    setPage
} = studentSlice.actions

export default studentSlice.reducer