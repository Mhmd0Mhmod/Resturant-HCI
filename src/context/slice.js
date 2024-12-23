import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});
export const { setUser, removeUser } = reducer.actions;
export default reducer.reducer;
