import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContohClassComp from "./classComp";

// setup react router dom
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing/routing";

// prop practice
import Parent from "./ContohProp/parent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// prop index.js=>Patent.jsx=>Child.jsx