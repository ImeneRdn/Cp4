import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
        </li>
        <li>
          <Link to="/compte">Compte</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
