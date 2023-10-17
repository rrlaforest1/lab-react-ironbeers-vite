import React from "react";
import { Link } from "react-router-dom";
import navImage from "./../assets/home-icon.png";

function Navbar() {
  return (
    <Link to="/">
      <nav>
        <img src={navImage} alt="Home" />
      </nav>
    </Link>
  );
}

export default Navbar;
