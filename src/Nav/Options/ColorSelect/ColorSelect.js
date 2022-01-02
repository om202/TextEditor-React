import React from "react";
import "./ColorSelect.css";

const ColorSelect = ({ applyStyle }) => {
  const runFunc = (v) => {
    applyStyle("span-font-color-" + v);
  };
  return (
    <select onChange={(event) => runFunc(event.target.value)}>
      <option id="red" value="red">
        Red
      </option>
      <option id="green" value="green">
        Green
      </option>
      <option id="blue" value="blue">
        Blue
      </option>
      <option id="yellow" value="yellow">
        Yellow
      </option>
      <option id="black" value="black">
        Black
      </option>
    </select>
  );
};

export default ColorSelect;
