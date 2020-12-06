import React from "react"

function Books(props) {
  const items = props.books.map(item => {
    return (
      <div className="total-book">
        
      <div className = "book-title">
      <h2>{item.fields.title}</h2>
      </div>
      <div className = "author">
      <h2>{item.fields.author}</h2>
      </div>
      <div className = "start-date">
      <h3>{item.fields.startdate}</h3>
      </div>
      <div className = "chaptersread">
      <h3>{item.fields.chaptersread}</h3>
      </div>
      <div className = "lastread">
      <h3>{item.fields.lastread}</h3>
      </div> 
        <div className = "starreview">
      <h3>{item.fields.starreview}</h3>
      </div> 
      <div className = "thoughts">
      <h3>{item.fields.thoughts}</h3>
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