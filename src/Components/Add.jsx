import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from '../services/index';
import './Add.css';


const Add = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [chaptersRead, setChaptersRead] = useState("");
  const [lastRead, setLastRead] = useState("");
  const [starReview, setStarReview] = useState("");
  const [thoughts, setThoughts] = useState("");
  const history = useHistory();

  const params = useParams();


  useEffect(() => {
    if (params.id && props.books.length > 0) {
      const bookStuff = props.books.find((book) => book.id === params.id);
      console.log(bookStuff)
      setTitle(bookStuff.fields.title);
      setAuthor(bookStuff.fields.author);
      setStartDate(bookStuff.fields.startdate);
      setChaptersRead(bookStuff.fields.chaptersread);
      setLastRead(bookStuff.fields.lastread);
      setThoughts(bookStuff.fields.thoughts);
      
      }
    }, [props.books, params.id]);

  console.log(props.books)

  let fields = {
    title: title,
    author: author,
    startdate: startDate,
    chaptersread: chaptersRead,
    lastread: lastRead,
    thoughts: thoughts,
  };

  async function handleSubmit(e) {
    e.preventDefault();


    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  }


  return (

    <div className="add-new">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            name='author'
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <label htmlFor='startDate'> Start Date</label>
          <input
            type='text'
            name='startDate'
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <label htmlFor='chaptersRead'> Chapters Read</label>
          <input
            type='text'
            name='chaptersRead'
            value={chaptersRead}
            onChange={(e) => {
              setChaptersRead(e.target.value);
            }}
          />
          <label htmlFor='lastRead'>Last Read</label>
          <input
            type='text'
            name='lastRead'
            value={lastRead}
            onChange={(e) => {
              setLastRead(e.target.value);
            }}
          />
          <label htmlFor='thoughts'>Thoughts</label>
          <input
            type='text'
            name='thoughts'
            value={thoughts}
            onChange={(e) => {
              setThoughts(e.target.value);
            }}
          />

          <button className="add-button" type='submit' >add me</button>

          {/* </div> */}
        </form>
      </div>

    </div>


  );
}


export default Add;
