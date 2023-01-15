import React from "react";
import "./styles.scss";

const ProgressBar = ({ progress, text }) => {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span className="progress-bar-text">{text}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
