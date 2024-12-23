import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  showCart: false,
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
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
});
export const { setUser, removeUser, setShowCart } = reducer.actions;
export default reducer.reducer;
