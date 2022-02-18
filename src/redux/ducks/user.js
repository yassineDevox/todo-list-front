import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios } from "../../tools/axios";

export const registerUser = 
createAsyncThunk("user/register", async ({ user }) => {
    console.log(user)
    const result =
        await Axios.post("/register", user)
    return result?.data

})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {},
        isLoading: false
    },
    reducers: {

    },
    extraReducers: {
        [registerUser.loading]: (state,_) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.userInfo = payload
            state.isLoading = false
        }
    }
})



export default userSlice.reducer