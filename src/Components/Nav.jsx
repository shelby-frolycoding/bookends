import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
    
      <div className="nav-bar">
        <div className= "emoji-nav">
          <p><Link className= "home-icon" to='/'>🏠</Link></p>
          <p><Link className= "book-icon "to='/books'>📚</Link></p>
        <p><Link className= "new-icon" to='/add-book'>🆕</Link></p>
        <p><Link className= "write-icon" to='/log'>✏️</Link></p>
        </div>
      </div>
      
        
        
    );
};

export default Nav;

