import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DeleteBooks = () => {
  const [userID, setUserID] = useState("");
  const [message, setMessage] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      handleDeleteBook();
    } else {
      console.log("error");
    }
  };

  console.log("User id: ", userID);

  let isValid = true;
  const validate = () => {
    if (userID === "" || userID === null) {
      isValid = false;
      console.log("Please enter valid user ID");
    }
  };

  // Step 3: Function to handle book deletion from API
  const handleDeleteBook = () => {
    axios
      .delete(
        `https://bookstore.toolsqa.com/BookStore/v1/Books?UserId=${userID}`
      )
      .then((response) => {
        if (response.status === 200) {
          setMessage("Book successfully deleted.");
        } else {
          setMessage(
            "Failed to delete book. Please check the UserID and try again."
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
          onChange={(e) => setUserID(e.target.value)}
          value={userID}
          placeholder="User ID"
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

export default DeleteBooks;
