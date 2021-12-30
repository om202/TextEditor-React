import React from "react";
import bold from "../../../icons/bold.svg";

const Bold = ({applyStyle}) => {
  
  return (
    <img src={bold} alt="Bold" onClick={()=>applyStyle('span-b')} id="bold" className="icons" />
  );
};

export default Bold;
