import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import Context from "./App/context/Context";
import { initailstate, reducer } from "./App/context/Reducer";
import "./App/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context initailstate={initailstate} reducer={reducer}>
    <App />
  </Context>
);
