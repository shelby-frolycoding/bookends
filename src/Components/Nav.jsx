import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
    
      <div className="nav-bar">
        <div className= "emoji-nav">
          <p><Link to='/'>🏠</Link></p>
          <p><Link to='/books'>📚</Link></p>
        <p><Link to='/add-book'>🆕</Link></p>
        <p><Link to='/add-favs'>💟</Link></p>
        </div>
      </div>
      
        
        
    );
};

export default Nav;

