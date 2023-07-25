import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const UpdateBook = () => {
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
      .put(`https://bookstore.toolsqa.com/BookStore/v1/Books/${isbn}`, options)
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
    <div className="form">
      <form
        onSubmit={handleSubmit}
        className="container m-8 gap-4 flex flex-col  p-10"
      >
        <input
          type="text"
          onChange={(e) => setIsbn(e.target.value)}
          value={isbn}
          placeholder="isbn Number"
          className="bg-[#e5e7eb] py-2 px-4 text-base border-solid border-2 border-gray-400"
        />

        <div className="flex gap-20 mx-4">
          <button
            type="submit"
            className="bg-[#49cc90] px-4 py-2 rounded-full max-w-max"
            onSubmit={handleSubmit}
          >
            Add Book
          </button>

          <Link to={"/home"} className="text-blue-500">
            Book List
          </Link>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateBook;
