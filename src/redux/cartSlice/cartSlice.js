import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: (() => {
      const cart = localStorage.getItem("cart");
      try {
        return cart ? JSON.parse(cart) : [];
      } catch (error) {
        console.error("Error parsing cart data:", error);
        return [];
      }
    })(),
    isCartOpen: false,
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

