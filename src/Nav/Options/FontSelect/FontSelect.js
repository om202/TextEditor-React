import React from "react";

const FontSelect = ({applyStyle}) => {
    const runFunc = (v) => {
        applyStyle("span-font-select-" + v);
      };
      
    return(
        <select  onChange={(event) => runFunc(event.target.value)}>
            <option value="arial">Arial</option>
            <option value="calibri">Calibri</option>
            <option value="cambria">Cambria</option>
            <option value="candara">Candara</option>
            <option value="georgia">Georgia</option>
            <option value="times-new-roman">Times New Roman</option>
            <option value="segoe-ui">Segoe UI</option>
            <option value="impact">Impact</option>
            <option value="verdana">Verdana</option>
          </select>
    );
}

export default FontSelect;