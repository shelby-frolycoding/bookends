import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Books from "./Components/Books";
import Add from "./Components/Add";
import './App.css';

function App() {
  const [books, updateBooks] = useState([])

  const getBooksData = async () => {
    const baseUrl = "https://api.airtable.com/v0/appkc7LtCYRf4lQd3/add"
    const config = {
      headers: {
        "Authorization": "Bearer keySFDZnBPT0vdG0E"
      }
    }

    const resp = await axios.get(baseUrl, config)
    console.log(resp)
    updateBooks(resp.data.records)
  }

  useEffect(() => {
    getBooksData()

  }, [])
  
  return (
    <div>
      <Nav />
    
      <Route exact path='/'>
      <div className= "header-fix">
      <header>BookEnds</header>
      </div>
        <Books books={books} />
      </Route>

     
       
    </div>
  );
}

<footer></footer>

export default App;
