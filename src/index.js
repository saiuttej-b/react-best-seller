import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";
import { books } from "./books";
import "./index.css";

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} {...book} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
