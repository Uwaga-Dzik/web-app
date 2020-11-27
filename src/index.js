import React from "react";
import ReactDOM from "react-dom";
import Index from "./views/Index";
import reportWebVitals from "./reportWebVitals";
import { Normalize } from "styled-normalize";
import "./fontello/css/fontello.css";

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
