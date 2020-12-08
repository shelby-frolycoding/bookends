import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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


    async function handleSubmit(e) {
      e.preventDefault();
      let data = {
        title,
        author,
        startDate,
        chaptersRead,
        lastRead,
        starReview,
        thoughts,
      };
    
    
      await axios.post(baseURL, { fields: data }, config);
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
          <label htmlFor='starReview'>Stars</label>
          <input
            type='text'
            name='starReview'
            value={starReview}
            onChange={(e) => {
              setStarReview(e.target.value);
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
            <div className="submit-button">
              <input type='submit' value='ADD ME!' />
              
              </div>
          </form>
     
        
          </div>
        </div>
      
    );
  }


export default Add;
