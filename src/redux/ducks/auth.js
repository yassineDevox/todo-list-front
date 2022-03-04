import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    loadUserFromAPI(state, { payload }) {
      //store userinfo in redux's store
      state.user = payload.userInfos;
      //store userInfo in localstorage with use of json.stringify
      window.localStorage.setItem(
        "user-info",
        JSON.stringify(payload.userInfos)
      );
    },
    loadUserFromLocalStorage(state) {
      if (state.user === undefined)
        state.user = JSON.parse(window.localStorage.getItem("user-info"));
    },
    clearUserSession(state) {
      //clear localstorage
      window.localStorage.clear();
      //clear state
      state.user = {};
    },
  },
});

//exporter toutes les actions pour les composants
export const { loadUserFromAPI, loadUserFromLocalStorage, clearUserSession } =
  authSlice.actions;
//exporter le reduceur pour le store
export default authSlice.reducer;
