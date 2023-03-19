import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const CART_COOKIE_NAME = "cart";

const initialCartState = {
  items: [],
  totalPrice: 0,
};

const cartDataFromCookie = Cookies.get(CART_COOKIE_NAME);

if (cartDataFromCookie) {
  initialCartState.items = cartDataFromCookie.items || [];
  initialCartState.totalPrice = cartDataFromCookie.totalPrice || 0;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          count: newItem.count,
        });
      } else {
        existingItem.count += newItem.count;
      }

      state.totalPrice += newItem.count * newItem.price;

      Cookies.set(CART_COOKIE_NAME, state);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
