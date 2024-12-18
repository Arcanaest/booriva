import { configureStore } from "@reduxjs/toolkit";
import favorites from "./favoritesSlice/favoritesSlice";

export const store = configureStore({ reducer: { favorites } });
