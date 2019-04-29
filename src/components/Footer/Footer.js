import React from "react";

const Footer = ({ author }) => (
  <footer className="hero hero-sm">
    <div className="text-gray">
      Copyright © 2019 <strong>{author || "Contributors"}</strong>. All rights reserved.
    </div>
  </footer>
);

export default Footer;