import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FindBook() {
  const [isbn, setIsbn] = useState("");
  const [dataObject, setDataObject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     findBook();
  //   }, []);
  // console.log(userID);
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

      <div className=" container bg-[#e5e7eb] py-2 px-4 my-3 text-base border-solid border-2 border-gray-400">
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
    </div>
  );
}

export default FindBook;
