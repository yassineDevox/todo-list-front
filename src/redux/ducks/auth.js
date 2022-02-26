import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CredentialsModal } from "../../model/credentials";
import client from "../../tools/axios";

export const login = createAsyncThunk(
  "auth/login",
  async ({ identifier, password }, { rejectWithValue, fulfillWithValue }) => {
    return client
      .post(
        "/auth/local?populate=*",
        new CredentialsModal(identifier, password)
      )
      .then((response) => fulfillWithValue(response.data))
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
    clearErrorMsg(state, _) {
      state.error = "";
    },
    logout(state,_){
      state.userInfo = {}
      window.localStorage.setItem("token","")
      window.localStorage.setItem("user","")
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      window.localStorage.setItem("token",action.payload.jwt)
      window.localStorage.setItem("user",JSON.stringify(action.payload.user))
      state.isLoading = false;
      state.error = "";

    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setLoading, clearErrorMsg,logout } = authSlice.actions;
export default authSlice.reducer;
