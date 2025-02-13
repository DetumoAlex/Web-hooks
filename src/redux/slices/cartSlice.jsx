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
    remove: (state, action) => {
      const itemId = action.payload.id;
      // console.log(itemId)
      state.cartItem = state.cartItem.filter((item) => item.id != itemId);
      // console.log(state.cartItem);
      // state.cartItem.filter(item => item !== actionitem.id);
      state.cartCount = state.cartItem.length;
    },
    
  },
});

export const { addToCart, remove } = cartSlice.actions;
export default cartSlice.reducer;
