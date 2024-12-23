import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";
import Food from "./foodSlice";
import Cart from "./CartSlice";

export const store = configureStore({
  reducer: {
    state: reducer,
    food: Food,
    cart: Cart,
  },
});
