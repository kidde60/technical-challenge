import React from "react";
import { Button } from "react-bootstrap";

export const AddBook = () => {
  const submitBook = async () => {
    const myData = {
      isbn: "1234567890",
    };
    const result = await fetch(
      "https://bookstore.toolsqa.com/BookStore/v1/Books",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(myData),
      }
    );
    const jsonResult = await result.json();
  };

  return <Button onClick={submitBook}>AddBook</Button>;
};
