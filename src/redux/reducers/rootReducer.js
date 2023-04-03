import { combineReducers } from "redux";
import cartSlice from "./AddCartSlice/cartSlice";
import loginSlice from "./Auth/loginSlice";
import userSlice from "./userSlice/userSlice";

const rootReducer = combineReducers({
  addProduct: cartSlice,
  userAuth: loginSlice,
  user: userSlice,
});

export default rootReducer;
