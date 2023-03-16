import React from "react";
import "./navbar.css"; //importing the CSS file

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src="https://static-exp1.licdn.com/sc/h/54ivs2ygirgbv6l7lazfepqxu" alt="LinkedIn Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">My Network</a>
        <a href="#">Jobs</a>
        <a href="#">Messaging</a>
        <a href="#">Notifications</a>
      </div>
      <div className="navbar-profile">
        <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Profile Picture" />
        <p>John Doe</p>
        <i className="fas fa-caret-down"></i>
      </div>
    </nav>
  );
}

export default Navbar;
