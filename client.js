import React from "react";
import ReactDOM from "react-dom";
import App from "./src/index.js";

ReactDOM.hydrate(<App {...window.__my__fucking__props__}></App>, document.querySelector("#root"));
