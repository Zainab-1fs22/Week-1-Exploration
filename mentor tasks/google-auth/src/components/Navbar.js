import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
