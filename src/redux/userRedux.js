import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUsers: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.currentUsers = action.payload;
    },

    updateUsers: (state, action) => {
      state.currentUsers = state.currentUsers.map((user) => {
        if (user._id === action.payload._id) {
          return action.payload;
        } else {
          return user;
        }
      });
    },

    deleteUser: (state, action) => {
      state.currentUsers = state.currentUsers.filter(
        (user) => user._id !== action.payload
      );
    },
  },
});

export const { updateUsers, setUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
