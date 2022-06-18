import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
  name: "word",
  initialState: {
    word: "",
    language: "en",
    allWord: [],
  },
  reducers: {
    fetchWord(state, action) {
      state.word = action.payload.word;
      state.language = action.payload.language;
      state.allWord = action.payload.allWord;

    },
    setWord(state, action) {
      state.word = action.payload.word;
    },
    setLanguage(state, action) {
      state.language = action.payload.language;
    },
  },
});
export const wordActions = wordSlice.actions;
export default wordSlice;
