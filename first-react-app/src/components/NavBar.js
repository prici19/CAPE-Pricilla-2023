import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar () {
    return ( 
        <nav className="navbar">
        <ul>
            <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
            <li> <NavLink to="/contact" activeClassNamw="active">Contact</NavLink></li>
        </ul>
        </nav>
    );
}
export default Navbar;