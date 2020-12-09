import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from '../services/index';
import "./Log.css";


const Log = (props) => {
  const [book, setBook] = useState("");
  const [logDate, setLogdate] = useState("");
  const [log, setLog] = useState("");
  const history = useHistory();

  let fields = {
    book: book,
    logdate: logDate,
    log: log,
  };

  async function handleSubmit(e) {
    e.preventDefault();


    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
    history.push("/log");
  }

  return (


    <div className="add-log">
      <form onSubmit={handleSubmit}>
        <label htmlFor='book'>Book</label>
        <input
          type='text'
          name='book'
          value={book}
          onChange={(e) => {
            setBook(e.target.value);
          }} />
        <label htmlFor='logDate'>Date</label>
        <input
          type='text'
          name='logDate'
          value={logDate}
          onChange={(e) => {
            setLogDate(e.target.value);
          }} />
        <label htmlFor='Log'>Thoughts, Feelings, Epiphanies?</label>
        <input
          type='text'
          name='log'
          value={log}
          onChange={(e) => {
            setLog(e.target.value);
          }} />

      </form>
    </div>
  )
}
