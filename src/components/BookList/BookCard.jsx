import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./bookCard.css";
const BookCard = () => {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Step 2: Fetch the data from the API inside useEffect hook (runs once on component mount)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bookstore.toolsqa.com/BookStore/v1/Books"
        );
        const data = await response.json();
        setDataArray(data); // Save the data in the state variable
        setIsLoading(false); // Update isLoading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Update isLoading to false on error as well
      }
    };

    fetchData();
  }, []);

  // Step 3: Conditional rendering based on the isLoading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(dataArray.books);
  // Step 4: Render the data once it's available
  return (
    <div className="mx-8">
      <div className="cardcontainer">
        <h1>BOOK LIST</h1>
        <Link to={"/book"} className="text-blue-600">
          <button
            type="button"
            className="button bg-[#61affe] px-4 py-2 rounded-full max-w-max"
          >
            Add Book
          </button>
        </Link>
      </div>
      <div className="container gap-8">
        {dataArray.books.map((data) => (
          <div
            key={data.id}
            className=" container bg-[#e5e7eb] py-2 px-4 my-3 text-base border-solid border-2 border-gray-400"
          >
            <h1>Title: {data.title}</h1>
            <h1>Isbn: {data.isbn}</h1>
            <h2>SubTitle: {data.subTitle}</h2>
            <h3>Author: {data.author}</h3>
            <h4>Published_date: {data.publish_date}</h4>
            <h3>Publisher: {data.publisher}</h3>
            <h3>Date: {data.pages}</h3>
            <p>Description: {data.description}</p>
            <p>Website: {data.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
