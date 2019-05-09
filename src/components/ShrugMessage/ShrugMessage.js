import React from "react";
import shrugGif from "./assets/images/shrug.gif";
import "./ShrugMessage.css";

const ShrugMessage = ({ children }) => (
  <div className="hero hero-lg">
    <div className="hero-body text-center">
      <img src={shrugGif} alt="shrug" className="shrug" />
      {children}
    </div>
  </div>
);

export default ShrugMessage;
