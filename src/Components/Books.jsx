import React from "react"

function Books(props) {
  const items = props.books.map(item => {
    return (
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
        <div className = "starreview">
      <h2>{item.fields.starreview}</h2>
      </div> 
        <div className="thoughts">
        <h1>Thoughts:</h1>
      <h2>{item.fields.thoughts}</h2>
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