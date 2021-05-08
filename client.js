import React from "react";
import ReactDOM from "react-dom";
import App from "./src/index.js";

ReactDOM.rehydrate(document.querySelector("#root"), <App></App>);
