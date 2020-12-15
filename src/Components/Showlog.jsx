import axios from "axios";
import React, { useEffect, useState } from "react";
import { logURL, config } from "../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


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
            <h4 className="h-one">Title:</h4>
            <h4 className= "log-data">{item.fields.book}</h4>
          </div>
          <div className="date-show">
            <h4 className="h-one">Date:</h4>
            <h4 className= "log-data">{item.fields.logdate}</h4>
          </div>
          <div className="log-show">
            <h4 className="h-thoughts">Thoughts:</h4>
            <h4 className="log-data">{item.fields.log}</h4>
            <div className="delete-log">
          <button  className= "log-trash" onClick={handleDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
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

export default Showlog