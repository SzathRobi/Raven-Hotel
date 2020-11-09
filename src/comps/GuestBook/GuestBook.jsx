import React from "react";
import "./GuestBook.css";

import GuestBookPage from "./GuestBookPage/GuestBookPage";

const GuestBook = () => {
  return (
    <div className="GuestBook">
      <div className="book">
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <GuestBookPage />
        <span className="cover"></span>
        <span className="page"></span>
        <span className="cover turn"></span>
      </div>
    </div>
  );
};

export default GuestBook;
