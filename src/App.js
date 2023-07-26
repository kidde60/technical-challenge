import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { BookDetails } from "./components/BookDetails/BookDetails";
import { AddBook } from "./components/AddBook/AddBook";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import FindBook from "./components/FindBook/FindBook";
import DeleteBook from "./components/DeleteBook/DeleteBook";
import DeleteBooks from "./components/DeleteBook/DeleteBooks";
import UpdateBook from "./components/UpdateBook/UpdateBook";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/book" element={<AddBook />} />
        <Route path="/find" element={<FindBook />} />
        <Route path="/delete" element={<DeleteBook />} />
        <Route path="/deleteAll" element={<DeleteBooks />} />
        <Route path="/update" element={<UpdateBook />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
