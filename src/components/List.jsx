import React from "react";
import add, { devide, multiply, substract } from "../jsES6/calculator.js";

let List = () => {
  return (
    <ul>
      <li>{add(23, 53)}</li>
      <li>{devide(5363, 32445322)}</li>
      <li>{substract(34334, 563)}</li>
      <li>{multiply(44534534, 6343)}</li>
    </ul>
  );
};

export default List;
