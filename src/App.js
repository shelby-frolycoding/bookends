import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Books from "./Components/Books";
import Add from "./Components/Add";
import Log from "./Components/Log";
import Home from "./Components/Home";
import Showlog from "./Components/Showlog";
import { baseURL, config } from "./services";
import './App.css';

function App() {
  const [books, updateBooks] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    async function getBooksData() {
      let resp = await axios.get(baseURL, config);
      updateBooks(resp.data.records);
    }

    getBooksData()

  }, [toggleFetch])

  return (
    <div>
      <Nav />

      <Route exact path='/'>
        <div className="header-fix">
          <header className= "main-header">BookEnds</header>
        </div>
        <Home setToggleFetch={setToggleFetch} />
      </Route>

      <Route path='/books'>
        <Books books={books} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path='/add-book'>
        <Add books={books} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path='/log'>
        <Log setToggleFetch={setToggleFetch} />
        <Showlog setToggleFetch={setToggleFetch} toggleFetch = {toggleFetch} />
      </Route>
      <Route path='/edit/:id'>
        <Add books={books} setToggleFetch={setToggleFetch} />
      </Route>



    </div>
  );
}

export default App;