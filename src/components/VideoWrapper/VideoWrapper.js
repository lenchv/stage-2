import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/pro-solid-svg-icons";
import { faAngleRight } from "@fortawesome/pro-regular-svg-icons";
import "./VideoWrapper.css";

const VideoWrapper = ({ children, duration = "00:00" }) => {
  const randomId = Math.random().toString(36);
  return (
    <div className="video-wrapper">
      <div className="accordion">
        <input type="checkbox" id={randomId} name="accordion-checkbox" hidden />
        <label className="accordion-header" htmlFor={randomId}>
          <FontAwesomeIcon icon={faVideo} fixedWidth />
          <span className="title"><strong>{duration}</strong></span>
          <span className="icon">
            <FontAwesomeIcon icon={faAngleRight} fixedWidth />
          </span>
        </label>
        <div className="accordion-body">
          <div className="iframe-wrapper">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoWrapper;