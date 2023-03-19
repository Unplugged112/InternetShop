import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./AddCartSlice/cartSlice";

export default configureStore({
  reducer: {
    addProduct: cartSlice,
  },
});