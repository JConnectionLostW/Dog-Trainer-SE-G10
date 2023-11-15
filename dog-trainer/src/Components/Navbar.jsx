import React from "react";
import './Navbar.css';

const NavBar = () => (
    <nav className = "nav">
        <ul className="app.navbar.links">
            <li className="p.opensans"><a href = "/">Home</a></li>
            <li className="p.opensans"><a href = "/Chat">Chat</a></li>
            <li className="p.opensans"><a href = "/Account">Account</a></li>
        </ul>
    </nav>
)
export default NavBar;