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
      const todoIndex = state.list.findIndex((t) => t.id == payload.todoId);
      state.list.splice(todoIndex, 1);
    },
    addTaskFromAPI(state, { payload }) {
      state.list.push(payload);
    },
    updateTaskFromAPI(state, { payload }) {
      state.list = state.list.map((t) =>
        t.id === payload.updatedTask.id ? { ...payload.updatedTask } : t
      );
    },
  },
});

export const {
  loadTasksFromAPI,
  deleteTaskFromAPI,
  addTaskFromAPI,
  updateTaskFromAPI,
} = taskSlice.actions;
export default taskSlice.reducer;
