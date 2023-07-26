import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

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
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="space-y-3 p-6 h-screen bg-gray-100 mx-40"
      >
        <div className="flex">
          <input
            type="text"
            onChange={(e) => setUserID(e.target.value)}
            value={userID}
            placeholder="User ID"
            required
            className="block w-3/4 px-3 mx-10 border rounded-lg"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onSubmit={handleSubmit}
            >
              Delete All Books
            </button>
          </div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteBooks;
