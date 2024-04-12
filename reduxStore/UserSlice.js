import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    add(state, action) {
      // console.log(state, action.payload, 'cllllll');
      return action.payload;
    },
    remove() {
      // console.log(state);
      return {};
    },
  },
});

export const { add, remove } = UserSlice.actions;

export default UserSlice.reducer;
