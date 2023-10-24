import React from "react";
import './Navbar.css';

const NavBar = () => (
    <nav className = "nav">
        <ul className="app.navbar.links">
            <li className="p.opensans"><a href = "/">Home</a></li>
            <li className="p.opensans"><a href = "/Login">Login</a></li>
            <li className="p.opensans"><a href = "/Register">Register</a></li>
            <li className="p.opensans"><a href = "/Account">Contact</a></li>
        </ul>
    </nav>
)
export default NavBar;