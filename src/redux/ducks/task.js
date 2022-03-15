const { createSlice } = require("@reduxjs/toolkit");

const taskSlice = createSlice({
  name: "task",
  initialState: {
    list: [],
  },
  reducers: {
    loadTasksFromAPI(state, { payload }) {
      state.list = payload.tasks;
    },
    deleteTaskFromAPI(state, { payload }) {
      const todoIndex = 
      state.list.findIndex((t) => t.id == payload.todoId);
      state.list.splice(todoIndex, 1);
    },
    addTaskFromAPI(state,{payload}){
      state.list.push(payload)
    }
  },
});

export const { loadTasksFromAPI,deleteTaskFromAPI,addTaskFromAPI } = taskSlice.actions;
export default taskSlice.reducer;
