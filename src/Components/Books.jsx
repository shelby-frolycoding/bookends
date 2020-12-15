import React from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
// import logo from "./logo.png";

import "./Books.css";


function Books(props) {

  const items = props.books.map(item => {

    const handleDelete = async () => {
      const bookURL = `${baseURL}/${item.id}`;
      await axios.delete(bookURL, config);
      props.setToggleFetch((prev) => !prev);
    };

    if (props.books) {
      return (

        <div className="total-book">

          <div className="book-title">
            <h1>Title:</h1>
            <h2>{item.fields.title}</h2>
          </div>
          <div className="author">
            <h1 className="h-book">By:</h1>
            <h2>{item.fields.author}</h2>
          </div>
          <div className="start-date">
            <h1 className="h-books">Start Date:</h1>
            <h2>{item.fields.startdate}</h2>
          </div>
          <div className="chaptersread">
            <h1 className="h-books">Last Chapter:</h1>
            <h2>{item.fields.chaptersread}</h2>
          </div>
          <div className="lastread">
            <h1 className="h-books">Last Read:</h1>
            <h2>{item.fields.lastread}</h2>
          </div>
          <div className="thoughts">
            <h1 className="h-books">Thoughts:</h1>
            <h2>{item.fields.thoughts}</h2>
          </div>
          <div className="book-image">
            <img src={"https://i.ibb.co/pLMk72m/218-2180174-photo-archive-g-book-stack-book-icons.png"} alt="logo" />
          </div>

          {/* all my buttons */}
          <div className="button-fix">
            <Link to={`/edit/${item.id}`}>
              <button className="edit-but"><FontAwesomeIcon icon={faEdit} /></button>
            </Link>
            <div className="delete-button">
              <button className="trash" onClick={handleDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
          </div>
        </div>

      )
     
    }
    return null;
  })


  return (
    <div>
      {items}
    </div>

  )

}

export default Books