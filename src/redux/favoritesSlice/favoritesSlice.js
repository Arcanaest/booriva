import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [],
  },
  reducers: {
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
