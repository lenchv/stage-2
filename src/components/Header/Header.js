import React from "react";
import { Link } from "gatsby";
import "./Header.css";

const Header = () => (
  <header className="hero hero-sm">
    <nav className="navbar">
      <div className="navbar-section">
        <Link to="/" className="home badge" data-badge="beta">		
          <strong>Binary Studio Academy 2019 &bull; Stage 2</strong>		
        </Link>
      </div>
      <div className="navbar-section">
        <Link to="/whats-this">
          Це як?
        </Link>
        <Link to="/whats-this/en">
          What's this?
        </Link>
        <Link to="/whats-this/ru">
          Как это?
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;