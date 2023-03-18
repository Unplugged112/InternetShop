// import { createSlice } from "@reduxjs/toolkit";

// const initialCartState = {
//   items: [],
//   totalQuantity: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: initialCartState,
//   reducers: {
//     addItemToCart(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item.id === newItem.id);

//       if (!existingItem) {
//         state.items.push({
// 			 id: newItem.id,	
//           name: newItem.name,
// 			 price: newItem.price,
// 			 count: newItem.count,
//         });
//       } else {
// 			existingItem.quantity++;
// 		}

// 		 state.totalQuantity++;
//     },
//   },
// });

// export const cartActions = cartSlice.actions;
// export default cartSlice.reducer;
