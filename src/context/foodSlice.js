import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../DB/Supabase";
import { addFoodItem, fetchFoodItems } from "../DB/services";

const initialState = {
  food: [],
  loading: false,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFoodItems.fulfilled, (state, action) => {
      state.food = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchFoodItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFoodItems.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(addFoodItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addFoodItem.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addFoodItem.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setFood } = foodSlice.actions;
export default foodSlice.reducer;
