import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/AddCartSlice/cartSlice";
import loginSlice from "./reducers/Auth/loginSlice";
export default configureStore({
  reducer: {
    addProduct: cartSlice,
    userAuth: loginSlice,
  },
});
