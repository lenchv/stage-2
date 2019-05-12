import React from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import { FacebookSelector } from "react-reactions";
import "./FacebookMessage.css";

const FacebookMessage = ({ children, small, subtle, withReactions }) => {
  return (
    <div className={classNames("bubble", {
      "small": small,
      "subtle": subtle
    })}>
      {children}
      {withReactions && <FacebookSelector />}
    </div>
  );
}

FacebookMessage.propTypes = {};

FacebookMessage.defaultProps = {};

export default FacebookMessage;