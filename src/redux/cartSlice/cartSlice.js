import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    setFavorites: (state, { payload }) => {
      state.cartItems = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartItems } = favoritesSlice.actions;

export default favoritesSlice.reducer;
