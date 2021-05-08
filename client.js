import React from "react";
import ReactDOM from "react-dom";
import App from "./src/index.js";

ReactDOM.hydrate(<App></App>, document.querySelector("#root"));
