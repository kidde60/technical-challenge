import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AddBook = () => {
  const [isbn, setIsbn] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      const options = {
        isbn: isbn,
      };
      axios
        .post("https://bookstore.toolsqa.com/BookStore/v1/Books", options)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("error");
    }
  };
  console.log("isbn Number: ", isbn);

  let isValid = true;
  const validate = () => {
    if (isbn === "" || isbn === null) {
      isValid = false;
      console.log("Please enter valid isbn Number");
    }
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
          placeholder="User Name"
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
    </div>
  );
};
