import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <div class="b-header">
        
        <nav  class="b-nav">
         
              <Link to={'/home'} class="b-nav__link">Mangamania</Link>
              <Link to={'/home'} class="b-nav__link" >Home</Link>
              <Link to={'/mangas'} class="b-nav__link" >Mangas</Link>
              <Link to={'/contacto'} class="b-nav__link" >Contacto</Link>

        </nav>

        <div> 
              <Link to={'/login'}class="b-button">Login</Link>
        </div>


        </div>
    )
}




export default Header