import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./word-slice";

const store = configureStore({
  reducer: { word: wordSlice.reducer }
});

export default store;
