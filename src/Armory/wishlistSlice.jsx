import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    success: null,
  },
  reducers: {
    setWishlist: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    addWishlistItem: (state, action) => {
      state.items.push(action.payload);
      state.success = "Added to wishlist!";
      state.isLoading = false;
      state.error = null;
    },
    setWishlistLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setWishlistError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearWishlistSuccess: (state) => {
      state.success = null;
    },
    removeWishlistItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.isLoading = false;
    },
  },
});

export default wishlistSlice;
export const wishlistActions = wishlistSlice.actions;
