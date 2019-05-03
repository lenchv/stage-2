import React from "react";
import PropTypes from "prop-types";
import { FacebookSelector } from "react-reactions";
import "./FacebookMessage.css";

const FacebookMessage = ({ children, small, subtle }) => {
  return (
    <div className={classNames("bubble", {
      "small": small,
      "subtle": subtle
    })}>{children}</div>
    <FacebookSelector />
  );
}

FacebookMessage.propTypes = {};

FacebookMessage.defaultProps = {};

export default FacebookMessage;