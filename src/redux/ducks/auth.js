import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CredentialsModal } from "../../model/credentials";
import client from "../../tools/axios";

export const login = createAsyncThunk(
  "auth/login",
  async ({ identifier, password }, { rejectWithValue }) => {
    return client
      .post("/auth/local", new CredentialsModal(identifier, password))
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => rejectWithValue(err.response.data.error.message));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    userInfo: {},
    error: "",
  },
  reducers: {
    setLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [login.pending]:(state)=>{
        state.isLoading=true
    }
  },
});

export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
