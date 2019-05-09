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
        <div className="text-gray">
          Made with 🧠, 🤲, 💻, and ❤️.
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;