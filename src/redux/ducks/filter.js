import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    query: "",
  },
  reducers: {
    setFilter(state, { payload }) {
      state.query = payload;
    },
  },
});

export const {setFilter} = filterSlice.actions
export default filterSlice.reducer
