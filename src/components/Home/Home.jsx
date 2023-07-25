import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addBooks } from "../../Features/BookSlice";

import BookCard from "../../BookList/BookCard";

export const Home = () => {
  // const url = 'https://bookstore.toolsqa.com/BookStore/v1/Books';
  const url = "https://bookstore.toolsqa.com/BookStore/v1/Books";
  const dispatch = useDispatch();

  const fetchBooks = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log("Error :", err);
    });
    dispatch(addBooks(response.data));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookCard />
    </div>
  );
};
