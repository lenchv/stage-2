import React from "react";

const Footer = ({ author }) => (
  <footer className="hero hero-sm">
    <div class="navbar">
      <section class="navbar-section">
        <div className="text-gray">
          Copyright © 2019 <strong>{author || "Contributors"}</strong>. All rights reserved.
        </div>
      </section>
      <section class="navbar-section">
        <div class="text-gray">
          Made with 🧠🤲💻❤️
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;