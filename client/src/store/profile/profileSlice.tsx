import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type ProfileState = {
  friends: number[];
};

const slice = createSlice({
  name: "profile",
  initialState: {
    friends:
      localStorage
        .getItem("friends")
        ?.split(" ")
        .map((number) => Number(number)) || [],
  } as ProfileState,
  reducers: {
    addFriend(state, action: PayloadAction<number>) {
      state.friends = [...new Set(state.friends.concat([action.payload]))];
    },
    removeFriend(state, action: PayloadAction<number>) {
      state.friends = state.friends.filter(
        (friend) => friend !== action.payload
      );
    },
  },
});

export default slice.reducer;

export const selectFriends = (state: RootState) => state.profile.friends;

export const { addFriend, removeFriend } = slice.actions;
