import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Apps from "./App";
import reportWebVitals from "./reportWebVitals";

//antd imports
import { App } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App>
    <Apps />
  </App>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
