import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="nav-container">
        <Link to="/">Students</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
