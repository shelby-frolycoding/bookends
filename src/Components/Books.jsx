import React from "react"
import axios from "axios";
import { baseURL, config } from "../services";
import "./Books.css";


function Books(props) {

  const items = props.books.map(item => {

    const handleDelete = async () => {
      const bookURL = `${baseURL}/${item.id}`;
      await axios.delete(bookURL, config);
      props.setToggleFetch((prev) => !prev);
    };
    
    return (
      <div className="fix-div">
      <div className="total-book">

        <div className="book-title">
          <h1>Title:</h1>
          <h2>{item.fields.title}</h2>
        </div>
        <div className="author">
          <h1>By:</h1>
          <h2>{item.fields.author}</h2>
        </div>
        <div className="start-date">
          <h1>Start Date:</h1>
          <h2>{item.fields.startdate}</h2>
        </div>
        <div className="chaptersread">
          <h1>Last Chapter:</h1>
          <h2>{item.fields.chaptersread}</h2>
        </div>
        <div className="lastread">
          <h1>Last Read:</h1>
          <h2>{item.fields.lastread}</h2>
        </div>
        <div className="starreview">
          <h2>{item.fields.starreview}</h2>
        </div>
        <div className="thoughts">
          <h1>Thoughts:</h1>
          <h2>{item.fields.thoughts}</h2>
        </div>
        <div className="book-image">
          <img src ={'https://png2.cleanpng.com/sh/9ef5f9e48d34d826335c9e296b7bdd4a/L0KzQYm3VMA4N5V3fZH0aYP2gLBuTfJwd5wyft5qdD3ndcTwhB4uapD0gAU2NXHmSYm7g8YyPZM5TKQ3OUC1RoeBV8cyPWM4SacBMUa5QImBWb5xdpg=/kisspng-book-flat-design-books-5ac984c615b442.9026687715231561660889.png'} alt="bookboi"/>
        </div>

        {/* all my buttons */}
        <div className="buttons">
          <div className="heart-button">
            <button>❤️</button>
          </div>
          <div className="delete-button">
            <button onClick={handleDelete}>🗑</button>
          </div>
        </div>

        </div>

      </div>
    )
  })

  return (
    <div>
      {items}
    </div>

  )

}

export default Books