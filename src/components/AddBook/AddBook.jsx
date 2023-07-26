import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export const AddBook = () => {
  const [userData, setUserData] = useState(null);
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
      addBook();
      // navigate("/home");
    } else {
      console.log("error");
    }
  };
  const addBook = async () => {
    const options = {
      userID: userID,
      isbn: isbn,
    };

    const url = "https://bookstore.toolsqa.com/BookStore/v1/Books";

    const result = await axios
      .post(url, options)
      .catch((error) => console.log("error: ", error));
    console.log(result);
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
              Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
