import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    things: [],
    isLoading: false,
    error: null,
    success: null,
  },
  reducers: {
    setCart: (state, action) => {
      state.things = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    addCartThing: (state, action) => {
      state.things.push(action.payload);
      state.success = "Added to cart!";
      state.isLoading = false;
      state.error = null;
    },
    setCartLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCartError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearCartSuccess: (state) => {
      state.success = null;
    },
    removeCartThing: (state, action) => {
      state.things = state.things.filter(
        (thing) => thing.id !== action.payload
      );
      state.isLoading = false;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
