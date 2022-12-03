import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Book from "./Book";
import Header from "../Header";

import { Tab, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";

const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  const [value, setValue] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <h1>Books List</h1>
      <Tabs
        sx={{ ml: "auto" }}
        textColor="white"
        value={value}
        className={styles.white_btn}
        onChange={(e, val) => setValue(val)}
      >
        <Tab LinkComponent={NavLink} to="/add" label="+ Add New Book" />
      </Tabs>

      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
