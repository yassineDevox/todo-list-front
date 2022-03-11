const { createSlice } = require("@reduxjs/toolkit");

const taskSlice = createSlice({
    name:"task",
    initialState:{
        list:[]
    },
    reducers:{
        loadTasksFromAPI(state,{payload}){
           state.list=payload.tasks
        }
    }
})

export const {loadTasksFromAPI} = taskSlice.actions
export default taskSlice.reducer