import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    isCartOpen: false
  },
  reducers: {
    setCartItems: (state, { payload }) => {
      state.cartItems = payload;
    },
    setIsCartOpen: (state, { payload }) => {
      state.isCartOpen = payload;
    },
  },
});


export const { setCartItems,setIsCartOpen } = cartSlice.actions;


export default cartSlice.reducer;

