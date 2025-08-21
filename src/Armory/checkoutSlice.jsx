import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    orders: [],
    isLoading: false,
    error: null,
    success: null,
  },

  reducers: {
    setCheckout: (state, action) => {
      state.orders = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setCheckoutLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCheckoutError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearCheckoutSuccess: (state) => {
      state.success = null;
    },
    removeCheckoutOrder: (state, action) => {
      state.orders = state.orders.filter((ord) => ord.id !== action.payload);
      state.isLoading = false;
    },
  },
});

export default checkoutSlice;
export const checkoutActions = checkoutSlice.actions;
