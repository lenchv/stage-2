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
        <a href="/whats-this/ua" className="btn btn-link">
          Це як?
        </a>
        <a href="/whats-this/en" className="btn btn-link">
          What's this?
        </a>
        <a href="/whats-this/ru" className="btn btn-link">
          Как это?
        </a>
      </div>
    </nav>
  </header>
);

export default Header;