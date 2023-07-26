import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const DeleteBook = () => {
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserData = localStorage.getItem("signupDetails");

    // Check if data exists in localStorage
    if (storedUserData) {
      // Convert the string back to an object using JSON.parse
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  // console.log(userData);
  const [isbn, setIsbn] = useState("");
  let userID = "";
  if (userData) {
    userID = userData.userID;
  }
  // console.log(userID);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      handleDeleteBook();
    } else {
      console.log("error");
    }
  };

  console.log("isbn Number: ", isbn);
  console.log("user id: ", userID);

  let isValid = true;
  const validate = () => {
    if (isbn === "" || isbn === null) {
      isValid = false;
      console.log("Please enter valid isbn Number");
    }
  };

  // Step 3: Function to handle book deletion from API
  const handleDeleteBook = () => {
    const options = {
      userID: userID,
      isbn: isbn,
    };
    axios
      .delete("https://bookstore.toolsqa.com/BookStore/v1/Book", options)
      .then((response) => {
        if (response.status === 200) {
          setMessage("Book successfully deleted.");
        } else {
          setMessage(
            "Failed to delete book. Please check the UserID and ISBN and try again."
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
        setMessage(error.response.statusText + "User");
      });
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="space-y-3 p-6 h-screen bg-gray-100 mx-40"
      >
        <div className="flex">
          <input
            type="text"
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
            placeholder="isbn Number"
            required
            className="block w-3/4 px-3 mx-10 border rounded-lg"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onSubmit={handleSubmit}
            >
              Delete Book
            </button>
          </div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteBook;
