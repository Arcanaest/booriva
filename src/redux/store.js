import { configureStore } from "@reduxjs/toolkit";
import favorites from "./favoritesSlice/favoritesSlice";
import cart from "./cartSlice/cartSlice";

export const store = configureStore({
  reducer: { favorites, cart },
});
