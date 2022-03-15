import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { InstructorModel } from "model/instructor";

//async thunk api 
export const loadInstructors = createAsyncThunk("instructor/all", async ({ limit }) => {
    return axios.get("/instructors")
        .then(list => ({ list, limit }))
})

//reducer with actions 
const instructorSlice = createSlice({
    name: "instructor",
    initialState: {
        list: [],
        isLoading: true,
        limitAt: 5,
        page: 1
    },
    reducers: {
        add(state, { payload }) {
            state.list.push(new InstructorModel())
        },
        del(state, { payload }) {
            console.log(payload)
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
        [loadInstructors.fulfilled]: (state, { payload: { list, limit } }) => {
            state.isLoading = false
            state.list = list
            state.limitAt = limit
        }
    }
})

//selectors 

export const listInstructorSelector = s =>
    [...s.list.filter((_, i) => i < s.limitAt * s.page && i > s.limitAt * (s.page - 1))]


//export 
export const {
    add,
    del,
    edit,
    setPage
} = instructorSlice.actions

export const instructorReducer =  instructorSlice.reducer