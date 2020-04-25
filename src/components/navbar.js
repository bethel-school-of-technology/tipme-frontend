import React from "react";
import { Link } from 'react-router-dom'
// import '../assets/css/navbar.css'

const NavBar = () => (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/restaurant">Restaurants</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
)

export default NavBar;
