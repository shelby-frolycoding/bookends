import axios from "axios";
import React, { useEffect, useState } from "react";
import { logURL, config } from "../services";


function Showlog(props) {

  const [log, getLog] = useState([])

  useEffect(() => {
    async function getLogData() {
      let resp = await axios.get(logURL, config);
      getLog(resp.data.records);
    }

    getLogData()

  }, [props.toggleFetch])


  const items = log.map(item => {

    const handleDelete = async () => {
      const bookURL = `${logURL}/${item.id}`;
      await axios.delete(bookURL, config);
      props.setToggleFetch((prev) => !prev);
    };

    return (
      <div className="show-log">
        <div className="all-log">

          <div className="book-show">
            <h1>Title:</h1>
            <h2 className= "log-data">{item.fields.book}</h2>
          </div>
          <div className="date-show">
            <h1>Date:</h1>
            <h2 className= "log-data">{item.fields.logdate}</h2>
          </div>
          <div className="log-show">
            <h1>Thoughts:</h1>
            <h2 className= "log-data">{item.fields.log}</h2>
          </div>
        </div>
        <div className="delete-log">
          <button onClick={handleDelete}>🗑</button>
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

export default Showlog