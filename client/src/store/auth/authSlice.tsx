import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { authApi } from "./authApi";
import { User } from "data-types/user";

type AuthState = {
  userid: string;
  token: string;
  user?: User;
};

const slice = createSlice({
  name: "auth",
  initialState: {
    userid: localStorage.getItem("userid") || "",
    token: localStorage.getItem("token") || "",
    user: undefined,
  } as AuthState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logout(state) {
      state.user = undefined;
      state.token = "";
      state.userid = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.userid = action.payload.userid;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
      }
    );
  },
});

export default slice.reducer;

export const selectUser = (state: RootState) => state.auth.user;
export const selectUserId = (state: RootState) => state.auth.userid;
export const selectToken = (state: RootState) => state.auth.token;

export const { setToken, logout } = slice.actions;
