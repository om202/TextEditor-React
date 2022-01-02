import React from "react";
import undo from "../../icons/corner-up-left.svg";
import redo from "../../icons/corner-up-right.svg";
import left from "../../icons/align-left.svg";
import center from "../../icons/align-center.svg";
import right from "../../icons/align-right.svg";
import "./Options.css";
import Save from "./Save"
import Bold from "./Bold/Bold";
import Italics from "./Italics";
import FontSize from "./FontSize/FontSize";
import FontSelect from "./FontSelect/FontSelect";
import ColorSelect from "./ColorSelect/ColorSelect";
import AlignLeft from "./AlignLeft";

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
          <Save/>
        </li>
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
          <Italics applyStyle={applyStyle} />
        </li>
        <li>
          <AlignLeft applyStyle={applyStyle} />
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
        <li>
          <ColorSelect applyStyle={applyStyle} />
        </li>
      </ul>
    </div>
  );
};

export default Options;
