import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

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
        className="flex flex-col items-center my-8 space-y-3 p-6 h-screen bg-gray-100 mx-40"
      >
        <div className="flex">
          <input
            type="text"
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
            placeholder="isbn Number"
            required
            className="block w-full px-3 mx-2 border rounded-lg"
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
        <div className="flex w-2/4 flex-col my-8 bg-gray-100">
          <div className="bg-gray-50 items-center m-3 p-10 rounded-lg shadow-xl transform transition-all  max-w-3/4 hover:scale-105">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 mr-2">TITLE:</h1>
              <h1 className="text-2xl font-semibold text-red">
                {dataObject.title}
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 mr-2">ISBN:</h1>
              <h1 className="text-xl font-semibold text-gray-800">
                {dataObject.isbn}
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 mr-2">
                SUBTITLE:
              </h1>
              <h1 className="text-2xl font-semibold text-gray-800">
                {dataObject.subTitle}
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 mr-2">AUTHOR:</h1>
              <h1 className="text-2xl font-semibold text-gray-800">
                {dataObject.author}
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 mr-2">
                PUBLISHED DATE:
              </h1>
              <h1 className="text-2xl font-semibold text-gray-800">
                {dataObject.publish_date}
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 mr-2">
                PUBLISHER:
              </h1>
              <h1 className="text-2xl font-semibold text-gray-800">
                {dataObject.publisher}
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 mr-2">PAGES:</h1>
              <h1 className="text-2xl font-semibold text-gray-800">
                {dataObject.pages}
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text text-gray-800">{dataObject.description}</p>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 mr-2">WEBSITE:</h1>
              <Link className="text-sm font-semibold text-blue-500">
                {dataObject.website}
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FindBook;
