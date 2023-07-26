import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function FindBook() {
  const [isbn, setIsbn] = useState("");
  const [dataObject, setDataObject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      findBook();
    } else {
      console.log("error");
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
  };

  const findBook = async () => {
    const url = `https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=${isbn}`;

    const result = await axios
      .get(url)
      .catch((error) => console.log("error: ", error));
    console.log(result.data);
    setDataObject(result.data);
    setIsLoading(false);
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
              Search
            </button>
          </div>
        </div>
        <div className=" container bg-[#e5e7eb] py-2 px-4 my-8 text-base border-solid border-2 border-gray-400">
          <h1>Title: {dataObject.title}</h1>
          <h1>Isbn: {dataObject.isbn}</h1>
          <h2>SubTitle: {dataObject.subTitle}</h2>
          <h3>Author: {dataObject.author}</h3>
          <h4>Published_date: {dataObject.publish_date}</h4>
          <h3>Publisher: {dataObject.publisher}</h3>
          <h3>Date: {dataObject.pages}</h3>
          <p>Description: {dataObject.description}</p>
          <p>Website: {dataObject.website}</p>
        </div>
      </form>
    </div>
  );
}

export default FindBook;
