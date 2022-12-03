import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { Tab, Tabs } from "@mui/material";

import React, { useEffect, useState } from "react";
import "./Book.css";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Tabs className="btn" textColor="white">
        <Tab LinkComponent={NavLink} to="/" label="Show Book List" />
      </Tabs>
      {inputs && (
        <form onSubmit={handleSubmit}>
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
            <p className="textfield1">Name</p>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              className="textfield"
              variant="outlined"
              name="name"
            />
            <p className="textfield1">Author</p>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              className="textfield"
              variant="outlined"
              name="author"
            />
            <p className="textfield1">Description</p>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              className="textfield"
              variant="outlined"
              name="description"
            />
            <p className="textfield1">Date</p>
            <TextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              className="textfield"
              fullWidth
              variant="outlined"
              name="price"
            />
            <p className="textfield1">Published Date</p>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              className="textfield"
              fullWidth
              variant="outlined"
              name="image"
            />

            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
