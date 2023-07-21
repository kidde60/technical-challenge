import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { BookDetails } from "./components/BookDetails/BookDetails";
import { AddBook } from "./components/AddBook/AddBook";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/book" element={<AddBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;