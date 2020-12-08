import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Books from "./Components/Books";
import Add from "./Components/Add";
import { baseURL, config } from "./services"
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
         <header>BookEnds</header>
         </div>
        <Books books={books} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path='/add-book'>
      <Add setToggleFetch={setToggleFetch} />
      </Route>

     
       
    </div>
  );
}

export default App;