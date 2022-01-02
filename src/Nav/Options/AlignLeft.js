import React from "react";
import left from "../../icons/align-left.svg";

const AlignLeft = ({ applyStyle }) => {
  return (
    <img
      src={left}
      onClick={() => applyStyle("span-align-left")}
      alt="Left"
      id="left"
      className="icons"
    />
  );
};

export default AlignLeft;
