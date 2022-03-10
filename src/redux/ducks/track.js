import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TrackModel } from "../../model/track";
import client from "../../tools/axios";

//async thunk api
export const loadTracks = createAsyncThunk(
  "track/all",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    let token = window.localStorage.getItem("token");
    return client
      .get("/tracks?populate=*", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => fulfillWithValue(response.data))
      .catch((err) => rejectWithValue(err));
  }
);

//reducer with actions
const trackSlice = createSlice({
  name: "track",
  initialState: {
    list: [],
    isLoading: false,
    limitAt: 5,
    page: 1,
    error: "",
  },
  reducers: {
    add(state, { payload: { newId, title, description, thumbnailURL } }) {
      state.list.push(new TrackModel(newId, title, description, thumbnailURL));
    },
    del(state, { payload }) {
      state.list.forEach((t, index) => {
        if (t.id === payload) {
          state.splice(index, 1);
        }
      });
    },
    edit(state, { payload }) {
      const { title, id, completed } = payload;
      state.list.forEach((t) => {
        if (t.id === id) {
          t = { ...t, ...payload };
        }
      });
    },
    setPage(state, { payload }) {
      state.page = payload;
    },
  },
  extraReducers: {
    [loadTracks.fulfilled]: (state,{payload}) => {
      state.isLoading = false;
      state.list = payload.data
    },
    [loadTracks.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
    [loadTracks.pending]: (state, _) => {
      state.isLoading = true;
    },
  },
});

//selectors

export const listTrackSelector = (s) => [
  ...s.list.filter(
    (_, i) => i < s.limitAt * s.page && i > s.limitAt * (s.page - 1)
  ),
];

//export
export const { add, del, edit, setPage } = trackSlice.actions;

export const trackReducer =  trackSlice.reducer;
