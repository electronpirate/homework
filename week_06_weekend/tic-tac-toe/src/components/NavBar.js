import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/board">Board</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>

  </ul>
);

export default NavBar;
