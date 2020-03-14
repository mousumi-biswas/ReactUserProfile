import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-text">
        <h1>Users Profile</h1>
      </div>
      <nav className="navBar">
        <a href="/home">Home</a>
        <a href="/profile">Profile</a>
        <a href="/user">Users</a>
      </nav>
    </div>
  );
};

export default Header;
