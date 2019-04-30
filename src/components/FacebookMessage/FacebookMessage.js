import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./FacebookMessage.css";


const FacebookMessage = ({ children, small, subtle }) => {
  return (<div className={classNames("bubble", {
    "small": small,
    "subtle": subtle
  })}>{children}</div>);
}


FacebookMessage.propTypes = {};

FacebookMessage.defaultProps = {};

export default FacebookMessage;