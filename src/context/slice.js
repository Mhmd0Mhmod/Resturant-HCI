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
  },
});
export const { setUser } = reducer.actions;
export default reducer.reducer;
