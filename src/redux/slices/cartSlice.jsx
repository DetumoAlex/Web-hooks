import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: { cartItems: [], cartCount: 0 },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload);
//       state.cartCount += 1;
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;

// export const store = configureStore({
//   reducer: { cart: cartSlice.reducer },
// });

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItem: [], cartCount: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
      state.cartCount += 1;
    },
  },
});


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
