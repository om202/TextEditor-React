import React from "react";
import undo from "../../icons/corner-up-left.svg";
import redo from "../../icons/corner-up-right.svg";
import italics from "../../icons/italic.svg";
import left from "../../icons/align-left.svg";
import center from "../../icons/align-center.svg";
import right from "../../icons/align-right.svg";
import "./Options.css";
import Bold from "./Bold/Bold";
import FontSize from "./FontSize/FontSize";
import FontSelect from "./FontSelect/FontSelect";

const applyEl = (selection, range, style) => {
  let e = document.createElement("span");
  e.classList.add(style);
  e.innerHTML = selection.toString();
  range.deleteContents();
  range.insertNode(e);
};

const Options = () => {
  const applyStyle = (style) => {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    if (selection.rangeCount) {
      //   if (range.startContainer.nextSibling == null) {
      applyEl(selection, range, style);
      //   } else {
      //     applyEl(selection, range, "un-" + style);
      //   }
    }
  };

  return (
    <div id="options">
      <ul id="options-list">
        <li>
          <img src={undo} alt="Undo" id="undo" className="icons" />
        </li>
        <li>
          <img src={redo} alt="Redo" id="redo" className="icons" />
        </li>
        <li>
          <Bold applyStyle={applyStyle} />
        </li>
        <li>
          <img src={italics} alt="Italics" id="italics" className="icons" />
        </li>
        <li>
          <img src={left} alt="Left" id="left" className="icons" />
        </li>
        <li>
          <img src={center} alt="Center" id="center" className="icons" />
        </li>
        <li>
          <img src={right} alt="Right" id="right" className="icons" />
        </li>
        <li>
          <FontSize applyStyle={applyStyle} />
        </li>
        <li>
          <FontSelect applyStyle={applyStyle} />
        </li>
      </ul>
    </div>
  );
};

export default Options;
