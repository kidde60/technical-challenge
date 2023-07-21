import React from "react";
import { useSelector } from "react-redux";
import { getAllBooks } from "../Features/BookSlice";
import Button from "react-bootstrap/Button";

// import BookCard from "./BookCard";
const BookList = () => {
  const books = useSelector(getAllBooks);
  console.log(books);
  // let renderBooks = "";
  // renderBooks =
  // books.length !== 0 ? (
  //   books.map((book, index) => {
  //     // console.log(book);
  //     <div>
  //       <h1>{book.isbn}</h1>
  //     </div>;
  //     //     <div className="container">

  //     //       <h1>{data.isbn}</h1>
  //     //       <h1>{data.title}</h1>
  //     //       <h2>{data.subTitle}</h2>
  //     //       <h3>{data.author}</h3>
  //     //       <h4>{data.publish_date}</h4>
  //     //       <h3>{data.publisher}</h3>
  //     //       <h3>{data.pages}</h3>
  //     //       <p>{data.description}</p>
  //     //       <p>{data.website}</p>
  //     //     </div>
  //     //   </div>
  //     //   <h1> {data.title}</h1>
  //     // </div>
  //   })
  // ) : (
  //   <div>
  //     <h3>{books.error}</h3>
  //   </div>
  // );
  // console.log(renderBooks);
  return (
    <div>
      <h1>Books</h1>
      {/* <div>
        {books.map((book) => {
          <div key={book.title}>
            <h1>{book.title}</h1>
          </div>;
        })}
      </div> */}
      <p>hgfgdffjghgk</p>

      <Button className="bg-primary color-danger" size="lg" active>
        Button
      </Button>
    </div>
  );
};

export default BookList;
