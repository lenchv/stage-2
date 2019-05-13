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
        <Link to="/whats-this" className="btn btn-link">
          Це як?
        </Link>
        <Link to="/whats-this/en" className="btn btn-link">
          What's this?
        </Link>
        <Link to="/whats-this/ru" className="btn btn-link">
          Как это?
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;