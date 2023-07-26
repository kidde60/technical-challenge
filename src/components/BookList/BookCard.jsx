import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./bookCard.css";
import Navbar from "../Navbar/Navbar";

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
    <>
      <Navbar />
      <div className="flex flex-col items-center my-8">
        <div className="w-full flex justify-around items-center">
          <h1 className="app-color-primary  text-3xl font-bold">BOOK LIST</h1>
          <Link to={"/book"} className="text-blue-600">
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Add Book
            </button>
          </Link>
        </div>
        <div className="flex w-2/4 flex-col my-8 bg-gray-100">
          {dataArray.books.map((data) => (
            <div
              key={data.id}
              className="bg-gray-50 items-center m-3 p-10 rounded-lg shadow-xl transform transition-all  max-w-3/4 hover:scale-105"
            >
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-600 mr-2">TITLE:</h1>
                <h1 className="text-2xl font-semibold text-red">
                  {data.title}
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-600 mr-2">ISBN:</h1>
                <h1 className="text-xl font-semibold text-gray-800">
                  {data.isbn}
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-600 mr-2">
                  SUBTITLE:
                </h1>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {data.subTitle}
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-600 mr-2">
                  AUTHOR:
                </h1>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {data.author}
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-600 mr-2">
                  PUBLISHED DATE:
                </h1>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {data.publish_date}
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-600 mr-2">
                  PUBLISHER:
                </h1>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {data.publisher}
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-600 mr-2">PAGES:</h1>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {data.pages}
                </h1>
              </div>
              <div className="flex items-center">
                <p className="text text-gray-800">{data.description}</p>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-red-600 mr-2">
                  WEBSITE:
                </h1>
                <Link className="text-sm font-semibold text-blue-500">
                  {data.website}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookCard;
