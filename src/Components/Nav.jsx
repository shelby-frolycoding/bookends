import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faPlusSquare, faBook, faHome } from "@fortawesome/free-solid-svg-icons";
// import { faKey, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (

    <div className="nav-bar">
        
        <Link className="home-icon" to='/'><FontAwesomeIcon icon={faHome} /></Link>
        <Link className="book-icon " to='/books'><FontAwesomeIcon icon={faBook} /></Link>
        <Link className="new-icon" to='/add-book'><FontAwesomeIcon icon={faPlusSquare} />
        </Link>
        <Link className="write-icon" to='/log'><FontAwesomeIcon icon={faKeyboard} />
      </Link>
     
      </div>
  
  



  );
};

export default Nav;

