 import React from "react";
 import { Link } from 'react-router-dom'
 
//import Logo from '../look/Images/logo.png';
import '../look/css/navbar.css';

 const NavBar = () => (
     <nav>
       <h2>Tip Me!</h2>
       <ul className="nav-links">
         <Link to="/">Home</Link>
         <Link to="/restaurant">Restaurants</Link>
         <Link to="/signup">Signup</Link>
         <Link to="/login">Login</Link>
       </ul>
    </nav>
)

 export default NavBar;
