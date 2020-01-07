import React from "react";
import ReactDOM from "react-dom";

const fname = "Jaya";
const lname = "Sharma";
const luckyNo = 7;

ReactDOM.render(
<div>
<h1>Hello {fname + " " +lname}!</h1>
  <p>Your lucky No is {Math.floor(Math.random()*10)}</p>
  </div>,
document.getElementById("root"));
