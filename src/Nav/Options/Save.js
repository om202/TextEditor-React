import React from "react";
import save from "../../icons/save.svg";
import jsPDF from "jspdf";

const SaveAsPdf = () => {
  const doc = new jsPDF();
  doc.fromHTML(document.getElementById("Editor"), 10, 0);
  doc.save("newfile.pdf");
};

const Save = () => {
  return (
    <img src={save} onClick={() => SaveAsPdf()} alt="Save" className="icons" />
  );
};

export default Save;
