import React from "react";
import './Navbar.css';

const NavBar = () => (
    <nav className = "app.navbar">
        <ul className="app.navbar.links">
            <li className="p.opensans"><a href = "/">Home</a></li>
            <li className="p.opensans"><a href = "/Login">Login</a></li>
            <li className="p.opensans"><a href = "/Register">Register</a></li>
            <li className="p.opensans"><a href = "/contact">Account</a></li>
        </ul>
    </nav>
)
export default NavBar;