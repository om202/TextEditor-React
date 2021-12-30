import React from "react";

const FontSize = ({ applyStyle }) => {
  const runFunc = (v) => {
    applyStyle("span-font-" + v);
  };

  return (
    <select onChange={(event) => runFunc(event.target.value)}>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="14">14</option>
      <option value="16">16</option>
      <option value="18">18</option>
      <option value="20">20</option>
      <option value="22">22</option>
      <option value="24">24</option>
      <option value="28">28</option>
      <option value="36">36</option>
      <option value="48">48</option>
      <option value="72">72</option>
    </select>
  );
};

export default FontSize;
