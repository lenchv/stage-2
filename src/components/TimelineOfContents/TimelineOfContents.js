import React from "react";
import PropTypes from "prop-types";

const TimelineOfContents = ({
  timeline = [],
  ...rest
}) => (
  <ul className="step" {...rest}>
    {
      timeline.map(({ linkTo, title, time }, index) => (
        <li key={`timeline-item-${index}`} className="step-item">
          {time && <div className="step-time"><small>{time}</small></div>}
          <a href={linkTo} className="step-level">{title}</a>
        </li>
      ))
    }
  </ul>
);

TimelineOfContents.propTypes = {
  timeline: PropTypes.arrayOf(PropTypes.shape({
    linkTo: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  }))
}

export default TimelineOfContents;
