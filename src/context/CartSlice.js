import { createSlice } from "@reduxjs/toolkit";
import { checkoutOrder } from "../DB/services";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
};
const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload.cart;
      state.total = action.payload.total;
      state.totalItems = action.payload.totalItems;
    },
    addToCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
      state.total += action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        item.quantity -= 1;
      }
      state.totalItems -= 1;
      state.total -= action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity += 1;
      state.totalItems += 1;
      state.total += action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        item.quantity -= 1;
      }
      state.totalItems -= 1;
      state.total -= action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    const toastId = toast.loading("Placing order...");
    builder.addCase(checkoutOrder.fulfilled, (state) => {
      toast.success("Order placed successfully", { id: toastId });
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;
      localStorage.removeItem("cart");
    });
    builder.addCase(checkoutOrder.rejected, (state, action) => {
      toast.error(action.error.message, { id: toastId });
    });
  },
});

export const {
  setCart,
  addToCart,
  removeFromCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
