import React from "react";
import italics from "../../icons/italic.svg";

const Italics = ({ applyStyle }) => {
  return (
    <img
      src={italics}
      onClick={() => applyStyle("span-i")}
      alt="Italics"
      id="italics"
      className="icons"
    />
  );
};

export default Italics;
