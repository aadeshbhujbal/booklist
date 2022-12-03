import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image, isbn } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <ol>
        <li>
          Image:
          <img src={image} alt={name} />
        </li>
        <li>
          <article>Author {author}</article>
        </li>
        <li>
          <h3>Publisher:{name}</h3>
        </li>
        <li>ISBN: {isbn}</li>
        <li>
          <p>Description{description}</p>
        </li>
        <li>
          <h3>Date {price}</h3>
        </li>
      </ol>
      {/* <img src={image} alt={name} />
      <article>By {author}</article> */}
      {/* <h3>{name}</h3>
      <p>{description}</p> */}

      <Button
        className="btn1"
        LinkComponent={Link}
        to={`/books/${_id}`}
        sx={{ mt: "auto", borderColor: "primary.main" }}
      >
        Update
      </Button>
      <Button
        className="btn1"
        color="error"
        onClick={deleteHandler}
        sx={{ mt: "auto" }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Book;
