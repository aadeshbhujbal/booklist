import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Tab, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./addbook.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",

    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: String(inputs.price),
        image: String(inputs.image),
        available: String(inputs.image),
        isbn: String(inputs.isbn),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Tabs className="btn" textColor="white">
          <Tab LinkComponent={NavLink} to="/" label="Show Book List" />
        </Tabs>
        <h1>Add Book</h1>
        <h3>Create New book</h3>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            className="textfield"
            placeholder="Title Of The Book"
            variant="outlined"
            name="name"
            style={{ flex: 1, margin: "0 20px 0 0", color: "white" }}
          />
          <TextField
            value={inputs.isbn}
            onChange={handleChange}
            margin="normal"
            className="textfield"
            fullWidth
            placeholder="ISBN"
            variant="outlined"
            name="image"
          />

          <TextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            placeholder="Author"
            fullWidth
            className="textfield"
            variant="outlined"
            name="author"
          />

          <TextField
            className="textfield"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            placeholder="Description"
            variant="outlined"
            className="textfield"
            name="description"
          />
          <TextField
            value={inputs.price}
            onChange={handleChange}
            type="number"
            className="textfield"
            margin="normal"
            fullWidth
            placeholder="Date"
            variant="outlined"
            name="price"
          />

          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            className="textfield"
            placeholder="Published Date"
            variant="outlined"
            name="image"
          />

          <Button className="btn1" type="submit">
            Add Book
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddBook;
