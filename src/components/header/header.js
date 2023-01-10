import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  
  return (
    <nav>
      <Link to="/">Logo</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
