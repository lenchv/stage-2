import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowUp } from "@fortawesome/pro-regular-svg-icons";
import "./Level.css";

const Level = ({
  number = "",
  name = "",
  difficulty = "",
  objectives = "",
  labels: {
    level: levelLabel = "Level",
    difficulty: difficultyLabel = "Difficulty:",
    objectives: objectivesLabel = "Objectives:",
    backToTop: backToTopLabel = "back to top"
  },
  ...rest
}) => (
  <div className="level" {...rest}>
    <small className="level__info">
      <em className="level__number">
        {levelLabel} {number}
      </em>
      <a className="level__back-to-top" href="#table-of-contents">
        <FontAwesomeIcon icon={faLongArrowUp} /> {backToTopLabel}
      </a>
    </small>
    <h3 className="level__name">
      {name}
    </h3>
    <small className="level__meta">
      <strong>{difficultyLabel}</strong> {difficulty}{" "}
      <strong>{objectivesLabel}</strong> {objectives}
    </small>
  </div>
);

Level.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  objectives: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labels: PropTypes.shape({
    level: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    backToTop: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    objectives: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  })
};

Level.defaultProps = {
  labels: {
    level: "Level",
    backToTop: "back to top",
    difficulty: "Difficulty:",
    objectives: "Objectives:"
  }
};

export default Level;
