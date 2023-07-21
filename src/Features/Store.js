import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./BookSlice";

export const store = configureStore({
  reducer: bookReducer,
});
