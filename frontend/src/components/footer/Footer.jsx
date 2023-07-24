import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Tous droits réservés. Destination
        Coréenne...
      </p>

      <div className="footer-links">
        <Link to="/">Accueil</Link>
        <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
        <Link to="/compte">Compte</Link>
      </div>
    </footer>
  );
}

export default Footer;
