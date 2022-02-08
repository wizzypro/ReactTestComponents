import React from "react";
import Heading from "./Heading";
import List from "./List";
import add, { devide, multiply, substract } from "./jsES6/calculator.js";
var myName = "Paul";
var lastName = "Anigbo";
var luckyNumber = 7;
var date = new Date();

const customStyles = {
  border: "1px solid red",
  color: "red",
  textAlign: "center",
  paddingTop: "10px"
};

let greetings;

const currentDate = new Date();

if (currentDate.getHours() < 12) {
  greetings = "Good Morning! ";
  customStyles.color = "red";
  customStyles.border = "1px solid red";
} else if (currentDate.getHours() > 12 && currentDate.getHours() < 18) {
  greetings = "Good Afternoon! ";
  customStyles.color = "green";
  customStyles.border = "1px solid green";
} else {
  greetings = "Good Evening! ";
  customStyles.color = "blue";
  customStyles.border = "1px solid blue";
}

let App = () => {
  return (
    <div>
      <Heading>{greetings}</Heading>
      <List></List>
      <h1 style={customStyles} id="gretingText">
        {greetings}
      </h1>

      <ul>
        <li>{add(32, 43)}</li>
        <li>{devide(789, 43)}</li>
        <li>{multiply(344, 22)}</li>
        <li>{substract(2345, 32)}</li>
      </ul>
    </div>
  );
};

export default App;
