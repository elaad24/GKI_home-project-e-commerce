import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartSlice from "./slices/shoppingCartSlice";

export default configureStore({
  reducer: {
    shoppingCart: ShoppingCartSlice,
  },
});
