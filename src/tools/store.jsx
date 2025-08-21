import { configureStore } from "@reduxjs/toolkit";
import createMyMiddleware from "./myMiddleware";
import userSlice from "../Armory/userSlice";
import productSlice from "../Armory/productSlice";
import wishlistSlice from "../Armory/wishlistSlice";
import cartSlice from "../Armory/cartSlice";
import checkoutSlice from "../Armory/checkoutSlice";

export const initializeStore = (axiosInstance) => {
  const customMiddleware = createMyMiddleware(axiosInstance);

  return configureStore({
    reducer: {
      user: userSlice.reducer,
      product: productSlice.reducer,
      wishlist: wishlistSlice.reducer,
      cart: cartSlice.reducer,
      checkout: checkoutSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActionPaths: [
            "payload.tool",
            "payload.onSuccess",
            "payload.onError",
            "payload.data",
          ],
        },
      }).concat(customMiddleware),
  });
};
