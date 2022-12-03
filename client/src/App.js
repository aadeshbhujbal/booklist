import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <React.Fragment>
      <header></header>
      <main className="container">
        <Routes>
          {user && <Route path="/" exact element={<Books />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />

          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
