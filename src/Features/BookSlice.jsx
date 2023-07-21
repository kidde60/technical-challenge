import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: {},
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, { payload }) => {
      state.books = payload;
    },
  },
});

export const { addBooks } = bookSlice.actions;
export const getAllBooks = (state) => state.books.books;
export default bookSlice.reducer;
